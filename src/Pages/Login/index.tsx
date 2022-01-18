import React from 'react';
import { Formik, Field, Form } from 'formik';
import Input from '../../components/Input';
import Checkbox from 'components/Checkbox';
import Link from 'components/Link';
import LockIcon from 'assets/icons/lock.svg';
import Button from 'components/Button';
import { LoginFields } from './loginUtils';
import CustomForm from 'components/CustomForm';

interface Props {}

const Login = (props: Props) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <CustomForm
      initialValues={{
        email: '',
        password: '',
        remember_me: false,
      }}
      fields={LoginFields}
      onSubmit={onSubmit}
      btnProps={{
        children: 'Sign in',
      }}
    >
      <div className="flex items-center justify-between">
        <Field name="remember_me" component={Checkbox}>
          Remember Me
        </Field>
        <Link href="#">Forgot password?</Link>
      </div>
    </CustomForm>
  );
};

export default Login;
