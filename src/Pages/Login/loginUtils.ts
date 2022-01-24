import Input from 'components/Input';
import { FieldConfig, GenericFieldHTMLAttributes } from 'formik';
import { BorderProps } from 'types/borderProps';
import { FieldsProps } from 'types/fieldsProps';

export type LoginInitValuesProps = {
  email: string;
  password: string;
  remember_me: boolean;
  serverError?: string;
};

export const LoginInitValues: LoginInitValuesProps = {
  email: '',
  password: '',
  remember_me: false,
};

const checkRequired = (value: string) => {
  if (!value) {
    return 'Required...';
  }
  return '';
};

export const LoginFields: FieldsProps<LoginInitValuesProps>[] = [
  {
    name: 'email',
    component: Input as React.ComponentType,
    placeholder: 'Email address',
    type: 'email',
    autoComplete: 'email',
    validate: (value: string) => {
      return checkRequired(value);
    },
    isFirst: true,
  },
  {
    name: 'password',
    component: Input as React.ComponentType,
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'current-password',
    isLast: true,
    validate: (value: string) => {
      return checkRequired(value);
    },
  },
];
