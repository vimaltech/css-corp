import React from 'react';
import CustomForm from 'components/CustomForm';
import {
  RegisterFields,
  RegisterInitValues,
  registerInitValues,
} from './registerIUtils';
import axiosInstance from 'utils/axios';
import axios from 'axios';
import { FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AuthResponse } from 'types/authResponse';
// import { axios } from 'axios';

interface Props {}

const Register = (props: Props) => {
  const navigate = useNavigate();

  const onSubmit = async (
    values: RegisterInitValues,
    formikHelpers: FormikHelpers<RegisterInitValues>,
  ) => {
    try {
      const { confirmPassword, serverError, ...rest } = values;
      const res = await axiosInstance.post<AuthResponse>('register', rest);
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
      initialValues={registerInitValues}
      fields={RegisterFields}
      onSubmit={onSubmit}
      btnProps={{
        children: 'Sign Up',
      }}
    />
  );
};

export default Register;
