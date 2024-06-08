import { PayloadAction } from '@reduxjs/toolkit';
import { notification } from 'antd';
import { all, put, takeLatest } from 'redux-saga/effects';

import { switchEPSG } from '../../../libs/utils';
import { backendService } from '../../../services';
import formatError from '../../../utils/formatError';
import { CustomLayer, FindedPoint, FindStationType } from '../type';
import { actions as webgisActions } from './reducer';

function* findStation(action: PayloadAction<FindStationType>) {
  try {
    const { type, ...data } = action.payload;
    const result: WithApiResult<FindedPoint[]> = yield backendService.post(
      `/find${type === 'lscp' ? 'LSCP' : 'PCenter'}`,
      {
        data,
      }
    );
    if (result.kind === 'ok') {
      const features = result.data.reduce((acc, item) => {
        acc.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: switchEPSG('VN2000_HCM', 'EPSG4326', [item.XX, item.YY]),
          },
          properties: { ...item },
        });
        return acc;
      }, [] as any[]);
      const layerId = `find-${type}`;
      const layer: CustomLayer = {
        id: layerId,
        geoJson: {
          type: 'FeatureCollection',
          features,
        },
        color: '#FF0000',
        name: `Tìm trạm bằng ${type === 'lscp' ? 'LSCP' : 'PCenter'}`,
      };
      yield put(webgisActions.addLayers({ [layerId]: layer }));
    } else {
      notification.error({ message: 'Lỗi truy vấn', description: formatError(result) });
      yield put(webgisActions.addLayers({}));
    }
  } catch ({ message }: any) {
    notification.error({ message: 'Lỗi truy vấn', description: message });
    yield put(webgisActions.addLayers({}));
  }
}
export default function* saga() {
  yield all([takeLatest(webgisActions.findStation.type, findStation)]);
}
