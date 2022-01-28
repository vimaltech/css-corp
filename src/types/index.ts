import { ReactElement } from 'react';

export type SelectOptions = {
  value: string;
  text: string;
};

export enum GenderType {
  male = 'male',
  female = 'female',
  other = 'other',
}

export type ProviderProps = {
  children: ReactElement;
};
