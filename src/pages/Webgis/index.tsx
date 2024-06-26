import {
  DeleteOutlined,
  FileAddOutlined,
  FileTextOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, MenuProps } from 'antd';
import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Map, Waiting } from '../../components';
import { selectUserAuthenticated } from '../../features/user/store/selectors';
import {
  ExportLayer,
  FindStation,
  ImportLayer,
  RemoveLayer,
} from '../../features/webgis/components';
import { useWebgisSlice } from '../../features/webgis/store';
import { selectWebgisHandling, selectWebgisLayers } from '../../features/webgis/store/selectors';

const Webgis = () => {
  const layers = useSelector(selectWebgisLayers);
  const [findStation, setFindStation] = useState<boolean>();
  const [isExport, setIsExport] = useState(false);
  const [isImport, setIsImport] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const webgisHandling = useSelector(selectWebgisHandling);
  const auth = useSelector(selectUserAuthenticated);

  const dispatch = useDispatch();
  const { actions } = useWebgisSlice();

  const items: MenuProps['items'] = useMemo(() => {
    const tmp: MenuProps['items'] = [
      {
        icon: <SearchOutlined />,
        key: 'find-station',
        label: 'Tìm trạm cứu hộ',
      },
    ];
    if (auth) {
      tmp.push(
        {
          icon: <FileAddOutlined />,
          key: 'add-layer',
          label: 'Thêm layer',
        },
        {
          icon: <DeleteOutlined />,
          key: 'remove-layer',
          label: 'Xóa layer',
        },
        {
          icon: <FileTextOutlined />,
          key: 'export-layer',
          label: 'Xuất layer',
        }
      );
    }
    return tmp;
  }, [auth]);

  return (
    <Layout
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
      }}
    >
      {webgisHandling ? <Waiting /> : null}
      {findStation ? <FindStation onCancel={() => setFindStation(false)} /> : null}
      {isImport ? (
        <ImportLayer
          onCancel={() => setIsImport(false)}
          onUpload={(data) => {
            dispatch(actions.addLayers({ [data.id]: data }));
            setIsImport(false);
          }}
        />
      ) : null}
      {isExport ? <ExportLayer onCancel={() => setIsExport(false)} /> : null}
      {isRemove ? (
        <RemoveLayer
          layers={Object.values(layers).map((layer) => ({ id: layer.id, name: layer.name }))}
          onRemoveLayer={(ids) => {
            const layerKey: string[] = [];
            const stationKey: string[] = [];
            ids.forEach((id) => {
              if (layers[id]) {
                layerKey.push(id);
              } else {
                stationKey.push(id);
              }
            });
            if (stationKey.length) {
              dispatch(actions.removeStationFinded({ ids: stationKey }));
            }
            if (layerKey.length) {
              dispatch(actions.removeLayers({ ids: layerKey }));
            }
            setIsRemove(false);
          }}
          onCancel={() => setIsRemove(false)}
        />
      ) : null}
      <Layout>
        <Layout.Content>
          <div className="leaflet-top leaflet-left" style={{ marginLeft: 100 }}>
            <Dropdown
              className="leaflet-control"
              menu={{
                items,
                onClick: ({ key }) => {
                  switch (key) {
                    case 'find-station':
                      setFindStation(true);
                      break;
                    case 'add-layer':
                      setIsImport(true);
                      break;
                    case 'remove-layer':
                      setIsRemove(true);
                      break;
                    case 'export-layer':
                      setIsExport(true);
                      break;
                    default:
                      break;
                  }
                },
              }}
              placement="bottomLeft"
            >
              <Button>
                Tính năng
                <MenuOutlined />
              </Button>
            </Dropdown>
          </div>
          <Map
            layers={layers}
            onAddLayer={(newLayer) => dispatch(actions.addLayers({ [newLayer.id]: newLayer }))}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Webgis;
