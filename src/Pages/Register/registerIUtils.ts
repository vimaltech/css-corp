import Input from 'components/Input';

const checkRequired = (value: string) => {
  if (!value) {
    return 'Required...';
  }
  return '';
};

export const registerInitValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const RegisterFields = [
  {
    name: 'name',
    component: Input,
    placeholder: 'Name',
    validate: (value: string) => {
      return checkRequired(value);
    },
    isFirst: true,
  },
  {
    name: 'email',
    component: Input,
    placeholder: 'Email address',
    type: 'email',
    autoComplete: 'email',
    validate: (value: string) => {
      return checkRequired(value);
    },
  },
  {
    name: 'password',
    component: Input,
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'new-password',
    validate: (value: string) => {
      return checkRequired(value);
    },
  },
  {
    name: 'confirmPassword',
    component: Input,
    placeholder: 'Confirm Password',
    type: 'password',
    autoComplete: 'new-password',
    validate: (value: string) => {
      return checkRequired(value);
    },
    isLast: true,
  },
];
