import React, { useContext, useMemo } from 'react';
import { Field } from 'formik';
import Checkbox from 'components/Checkbox';
import Link from 'components/Link';
import { LoginFields, LoginInitValues } from './loginUtils';
import CustomForm from 'components/CustomForm';
import { AuthContext } from 'context/authContext';

interface Props {}

const Login = (props: Props) => {
  const { onLogin } = useContext(AuthContext);

  const btnProps = useMemo(
    () => ({
      children: 'Sign In',
    }),
    [],
  );

  return (
    <CustomForm
      initialValues={LoginInitValues}
      fields={LoginFields}
      onSubmit={onLogin}
      btnProps={btnProps}
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
