import type { RootState } from '../../../types/RootState';
import { initialState } from './reducer';

const selectDomain = (state: RootState) => state?.webgisStore || initialState;

export const selectWebgisHandling = (state: RootState) => selectDomain(state).handling;

export const selectWebgisLayers = (state: RootState) => selectDomain(state).layers;
