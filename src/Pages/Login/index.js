import React from 'react';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';
import { LockClosedIcon } from '@heroicons/react/solid';
import FormikInput from '../../component/FormikTextInput';
import FormikCheckbox from '../../component/FormikCheckbox';
import FormikRadio from '../../component/FormikRadio';
import { Link } from 'react-router-dom';

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const Login = () => {
  const onSubmitLogin = async (values) => {
    await wait(5000);
    console.log(values);
  };

  const validateLogin = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required.';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
        gender: 'male',
      }}
      onSubmit={onSubmitLogin}
      validate={validateLogin}
    >
      {({ isValid, isSubmitting, touched }) => {
        const isTouched = Object.keys(touched).length > 0;
        return (
          <Form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Field
                component={FormikInput}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                isFirstInput
              />
              <Field
                component={FormikInput}
                name="password"
                type="password"
                autoComplete="password"
                placeholder="Password"
                isLastInput
              />
            </div>
            <div className="flex items-center justify-between">
              <Field
                component={FormikCheckbox}
                name="rememberMe"
                label="Remember Me"
              />

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || !(isTouched && isValid)}
                className={cn(
                  'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  {
                    'bg-gray-300': isSubmitting || !(isTouched && isValid),
                    'hover:bg-gray-500':
                      isSubmitting || !(isTouched && isValid),
                    'focus:ring-gray-700':
                      isSubmitting || !(isTouched && isValid),
                  },
                )}
              >
                {!isValid && (
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                )}
                Sign in
              </button>
            </div>

            <div className="text-sm text-center">
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Dont have an account? Please Register
              </Link>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
