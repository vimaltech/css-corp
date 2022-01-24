import React from 'react';
import { Field } from 'formik';
import Checkbox from 'components/Checkbox';
import Link from 'components/Link';
import {
  LoginFields,
  LoginInitValues,
  LoginInitValuesProps,
} from './loginUtils';
import CustomForm from 'components/CustomForm';

interface Props {}

const Login = (props: Props) => {
  const onSubmit = (values: LoginInitValuesProps) => {
    console.log(values);
  };

  return (
    <CustomForm
      initialValues={LoginInitValues}
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
