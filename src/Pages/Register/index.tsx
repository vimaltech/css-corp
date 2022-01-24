import React from 'react';
import CustomForm from 'components/CustomForm';
import {
  RegisterFields,
  RegisterInitValues,
  registerInitValues,
} from './registerIUtils';

interface Props {}

const Register = (props: Props) => {
  const onSubmit = (values: RegisterInitValues) => {
    console.log(values);
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
