import { Button } from 'antd';
import L from 'leaflet';
import _ from 'lodash';
import { useEffect, useRef, useState } from 'react';
import {
  FeatureGroup,
  GeoJSON,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  WMSTileLayer,
} from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import { useSelector } from 'react-redux';

import { selectUserAuthenticated } from '../../features/user/store/selectors';
import {
  selectWebgisCenter,
  selectWebgisStationsFinded,
} from '../../features/webgis/store/selectors';
import { CustomLayer } from '../../features/webgis/type';
import { switchEPSG } from '../../libs/utils';
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
  const userAuth = useSelector(selectUserAuthenticated);
  const stationFinded = useSelector(selectWebgisStationsFinded);
  const center = useSelector(selectWebgisCenter);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.flyTo(center as [number, number]);
    }
  }, [center]);

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
      <MapContainer ref={mapRef} center={center as [number, number]} zoom={13}>
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

          {Object.entries(stationFinded).map(([type, data]) => (
            <LayersControl.Overlay name={`Tìm kiếm bằng ${_.toUpper(type)}`} key={type} checked>
              <LayerGroup>
                {data.map((station) => (
                  <Marker
                    position={
                      switchEPSG('VN2000_HCM', 'EPSG4326', [station.XX, station.YY]).reverse() as [
                        number,
                        number
                      ]
                    }
                  >
                    <Popup>
                      <div>
                        <div>
                          <b>Id:</b> {station.Id}
                        </div>
                        <div>
                          <b>FacilityPoints:</b> {station.FacilityPoints}
                        </div>
                        <div>
                          <b>XX:</b> {station.XX}
                        </div>
                        <div>
                          <b>YY:</b> {station.YY}
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </LayerGroup>
            </LayersControl.Overlay>
          ))}
        </LayersControl>

        {userAuth ? (
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
        ) : null}
      </MapContainer>
    </div>
  );
};

export default Map;
