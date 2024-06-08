import { createSlice } from '../../../redux/toolkit';
import { UserState } from '../type';

export const initialState: UserState = {
  handling: false,
  data: {
    id: '',
    email: '',
  },
};

const slice = createSlice({
  name: 'userStore',
  initialState,
  reducers: {},
});

export const { actions, name: key, reducer } = slice;
