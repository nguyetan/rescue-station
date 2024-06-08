import { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '../../../redux/toolkit';
import { CustomLayer, FindStationType, WebgisState } from '../type';

export const initialState: WebgisState = {
  handling: false,
  layers: {},
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
  },
});

export const { actions, name: key, reducer } = slice;
