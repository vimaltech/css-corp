import { GenderType } from 'types';

export type User = {
  email: string;
  name: string;
  gender: GenderType;
  id: number;
};

export type AuthResponse = {
  accessToken: string;
  user: User;
};
