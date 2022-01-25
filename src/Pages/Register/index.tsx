import React, { useCallback, useContext, useMemo } from 'react';
import CustomForm from 'components/CustomForm';
import {
  RegisterFields,
  RegisterInitValues,
  registerInitValues,
} from './registerIUtils';
import { FormikErrors } from 'formik';
import { AuthContext } from 'context/authContext';
// import { axios } from 'axios';

interface Props {}

const Register = (props: Props) => {
  const { onRegister } = useContext(AuthContext);

  const validate = useCallback((values: RegisterInitValues) => {
    const errors: FormikErrors<RegisterInitValues> = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password and confirm password should match.';
    }
    return errors;
  }, []);

  const btnProps = useMemo(
    () => ({
      children: 'Sign Up',
    }),
    [],
  );

  return (
    <CustomForm
      validate={validate}
      initialValues={registerInitValues}
      fields={RegisterFields}
      onSubmit={onRegister}
      btnProps={btnProps}
    />
  );
};

export default Register;
