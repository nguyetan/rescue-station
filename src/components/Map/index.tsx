import { Button } from 'antd';
import L from 'leaflet';
import { useRef, useState } from 'react';
import {
  FeatureGroup,
  GeoJSON,
  LayersControl,
  MapContainer,
  TileLayer,
  WMSTileLayer,
} from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';

import { CustomLayer } from '../../features/webgis/type';
import AddLayer from './AddLayer';

type Props = {
  layers: CustomObject<CustomLayer>;
  onAddLayer: (layer: CustomLayer) => void;
};

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
});

const Map = ({ layers, onAddLayer }: Props) => {
  const mapRef = useRef<any>();
  const [layerEdit, setLayerEdit] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSaveLayer = (info: { name: string; color: string; id: string }) => {
    const data: any = {};
    layerEdit.forEach((id) => {
      const layer = mapRef.current._layers[id];
      data[id] = layer.toGeoJSON();
      mapRef.current.removeLayer(layer);
    });

    const geoJson = {
      type: 'FeatureCollection',
      features: Object.values(data),
    };
    onAddLayer({ ...info, geoJson });
    setLayerEdit([]);
    setModalVisible(false);
  };

  return (
    <div style={{ height: '100%' }}>
      {modalVisible ? (
        <AddLayer onAddLayer={handleSaveLayer} onCancel={() => setModalVisible(false)} />
      ) : null}
      <MapContainer ref={mapRef} center={[10.877624025081147, 106.77712164784637]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <div className="leaflet-top leaflet-left" style={{ marginLeft: 220 }}>
          {layerEdit.length ? (
            <Button
              type="primary"
              className="leaflet-control"
              onClick={() => setModalVisible(true)}
            >
              Lưu layer
            </Button>
          ) : null}
        </div>

        <LayersControl position="topright">
          <LayersControl.Overlay name="Điểm ven Thuỷ hệ">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:thuyhe_diemven2_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Một phần thuỷ hệ">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:thuyhe_hcm_motphan_dissolve_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Một phần đoạn sông">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="test:thuyhe_hcm_motphan_dissolve_line5_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Thành phố Thủ Đức">
            <WMSTileLayer
              url="http://localhost:8082/geoserver/test/wms"
              layers="	test:tpthuduc_84"
              format="image/png"
              transparent={true}
            />
          </LayersControl.Overlay>
          {Object.values(layers).map((layer) => (
            <LayersControl.Overlay name={layer.name} key={layer.name} checked>
              <GeoJSON
                data={layer.geoJson}
                pathOptions={{ color: layer.color }}
                pointToLayer={
                  layer.converPoint
                    ? (_feature, latlng) => {
                        return L.circleMarker(latlng, {
                          radius: 8,
                          fillColor: layer.color,
                          color: layer.color,
                          weight: 0.5,
                          opacity: 1,
                          fillOpacity: 0.8,
                        });
                      }
                    : undefined
                }
              />
            </LayersControl.Overlay>
          ))}
        </LayersControl>
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: false,
              circle: false,
              circlemarker: false,
            }}
            onCreated={(e) => {
              setLayerEdit((pre) => [...pre, `${e.layer._leaflet_id}`]);
            }}
            onDeleted={(e) => {
              const ids = Object.keys(e.layers._layers);
              setLayerEdit((pre) => pre.filter((id) => !ids.includes(id)));
            }}
          />
        </FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
