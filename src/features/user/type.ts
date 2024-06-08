export type User = {
  id: string;
  name?: string;
  email: string;
  photoURL?: string;
};

export type UserState = {
  handling: boolean;
  authenticated: boolean;
  data?: User;
};
