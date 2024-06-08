export type UserState = {
  handling: boolean;
  data: {
    id: string;
    name?: string;
    email: string;
    avatar?: string;
  };
};
