import Input from 'components/Input';
import Select from 'components/Select';
import { GenderType } from 'types';
import { FieldsProps } from 'types/fieldsProps';

const checkRequired = (value: string) => {
  if (!value) {
    return 'Required...';
  }
  return '';
};

const compare = (val1: string, val2: string) => {
  if (val1 !== val2) {
    return 'Password and confirm password should match.';
  }
  return '';
};

export type RegisterInitValues = {
  name: string;
  gender: GenderType | '';
  email: string;
  password: string;
  confirmPassword: string;
  serverError?: string;
};

export const registerInitValues: RegisterInitValues = {
  name: '',
  gender: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterFields: FieldsProps<RegisterInitValues>[] = [
  {
    name: 'name',
    component: Input as React.ComponentType,
    placeholder: 'Name',
    validate: (value: string) => {
      return checkRequired(value);
    },
    isFirst: true,
  },
  {
    name: 'gender',
    component: Select as React.ComponentType,
    placeholder: 'Please select gender',
    validate: (value: string) => {
      return checkRequired(value);
    },
    options: [
      { value: GenderType.male, text: 'Male' },
      { value: GenderType.female, text: 'Female' },
      { value: GenderType.other, text: 'Other' },
    ],
  },
  {
    name: 'email',
    component: Input as React.ComponentType,
    placeholder: 'Email address',
    type: 'email',
    autoComplete: 'email',
    validate: (value: string) => {
      return checkRequired(value);
    },
  },
  {
    name: 'password',
    component: Input as React.ComponentType,
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'new-password',
    validate: (value: string) => {
      return checkRequired(value);
    },
  },
  {
    name: 'confirmPassword',
    component: Input as React.ComponentType,
    placeholder: 'Confirm Password',
    type: 'password',
    autoComplete: 'new-password',
    validate: (value: string) => {
      return checkRequired(value);
    },
    isLast: true,
  },
];
