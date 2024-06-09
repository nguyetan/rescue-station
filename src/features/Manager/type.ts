import { User } from '../user/type';

export type Feedback = {
  name: string;
  email: string;
  phone: string;
  content: string;
  createdAt: string;
};

export type ManagerSate = {
  handling: boolean;
  users: CustomObject<User>;
  feedbacks: CustomObject<Feedback>;
};
