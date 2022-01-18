import Input from 'components/Input';

const checkRequired = (value: string) => {
  if (!value) {
    return 'Required...';
  }
  return '';
};

export const LoginFields = [
  {
    name: 'email',
    component: Input,
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
    component: Input,
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'current-password',
    isLast: true,
    validate: (value: string) => {
      return checkRequired(value);
    },
  },
];
