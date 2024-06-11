import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '../../../redux/toolkit';
import { CustomLayer, FindedPoint, FindStationType, WebgisState } from '../type';

export const initialState: WebgisState = {
  handling: false,
  layers: {},
  stations: {},
  center: [10.877624025081147, 106.77712164784637],
};

const slice = createSlice({
  name: 'webgisStore',
  initialState,
  reducers: {
    addLayers(state, action: PayloadAction<CustomObject<CustomLayer>>) {
      state.handling = false;
      state.layers = {
        ...state.layers,
        ...action.payload,
      };
    },
    removeLayers(state, action: PayloadAction<{ ids: string[] }>) {
      const { ids } = action.payload;
      state.handling = false;
      ids.forEach((id) => {
        delete state.layers[id];
      });
    },
    findStation(state, _action: PayloadAction<FindStationType>) {
      state.handling = true;
    },
    updateStationFinded(state, action: PayloadAction<{ type: string; data: FindedPoint[] }>) {
      state.handling = false;
      state.stations = {
        ...state.stations,
        [action.payload.type]: action.payload.data,
      };
    },
    changeFocusCenter(state, action: PayloadAction<{ center: number[] }>) {
      state.handling = false;
      state.center = action.payload.center;
    },
  },
});

export const { actions, name: key, reducer } = slice;
