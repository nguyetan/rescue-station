import type { UserState } from '../features/user/type';
import { WebgisState } from '../features/webgis/type';

export type RootState = {
  userStore: UserState;
  webgisStore: WebgisState;
};
