import type { ManagerSate } from '../features/Manager/type';
import type { UserState } from '../features/user/type';
import type { WebgisState } from '../features/webgis/type';

export type RootState = {
  userStore: UserState;
  webgisStore: WebgisState;
  managerStore: ManagerSate;
};
