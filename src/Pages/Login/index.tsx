import React from 'react';
import { Field, FormikHelpers } from 'formik';
import Checkbox from 'components/Checkbox';
import Link from 'components/Link';
import {
  LoginFields,
  LoginInitValues,
  LoginInitValuesProps,
} from './loginUtils';
import CustomForm from 'components/CustomForm';
import axiosInstance from 'utils/axios';
import { useNavigate } from 'react-router-dom';
import { AuthResponse } from 'types/authResponse';

interface Props {}

const Login = (props: Props) => {
  const navigate = useNavigate();

  const onSubmit = async (
    values: LoginInitValuesProps,
    formikHelpers: FormikHelpers<LoginInitValuesProps>,
  ) => {
    try {
      const { serverError, ...rest } = values;
      const res = await axiosInstance.post<AuthResponse>('login', rest);
      formikHelpers.resetForm();
      sessionStorage.setItem('@app/token', res.data.accessToken);
      navigate('/home');
    } catch (error) {
      let message = 'Something went wrong. Try after somtime';
      if (error instanceof Error) {
        message = error.message;
      }
      formikHelpers.setErrors({ serverError: message });
    }
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
