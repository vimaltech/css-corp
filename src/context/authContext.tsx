import { FormikHelpers } from 'formik';
import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { RegisterInitValues } from 'Pages/Register/registerIUtils';
import React, {
  createContext,
  ReactElement,
  useCallback,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthResponse } from 'types/authResponse';
import axiosInstance from 'utils/axios';

type AuthContextType = {
  user?: AuthResponse;
  onLogin: (
    values: LoginInitValuesProps,
    formikHelpers: FormikHelpers<LoginInitValuesProps>,
  ) => Promise<void>;
  onRegister: (
    values: RegisterInitValues,
    formikHelpers: FormikHelpers<RegisterInitValues>,
  ) => Promise<void>;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  onLogin: async () => {},
  onRegister: async () => {},
  onLogout: () => {},
});

type Props = {
  children: ReactElement;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthResponse>();
  const navigate = useNavigate();

  const onLogin = useCallback(
    async (
      values: LoginInitValuesProps,
      formikHelpers: FormikHelpers<LoginInitValuesProps>,
    ) => {
      try {
        const { serverError, ...rest } = values;
        const res = await axiosInstance.post<AuthResponse>('login', rest);
        formikHelpers.resetForm();
        setUser(res.data);
        sessionStorage.setItem('@app/token', JSON.stringify(res.data));
        navigate('/home', { replace: true });
      } catch (error) {
        let message = 'Something went wrong. Try after somtime';
        if (error instanceof Error) {
          message = error.message;
        }
        formikHelpers.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onRegister = useCallback(
    async (
      values: RegisterInitValues,
      formikHelpers: FormikHelpers<RegisterInitValues>,
    ) => {
      try {
        const { confirmPassword, serverError, ...rest } = values;
        const res = await axiosInstance.post<AuthResponse>('register', rest);
        formikHelpers.resetForm();
        setUser(res.data);
        sessionStorage.setItem('@app/token', JSON.stringify(res.data));
        navigate('/home', { replace: true });
      } catch (error) {
        let message = 'Something went wrong. Try after somtime';
        if (error instanceof Error) {
          message = error.message;
        }
        formikHelpers.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onLogout = useCallback(() => {
    sessionStorage.removeItem('@app/token');
    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
