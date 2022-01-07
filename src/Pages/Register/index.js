import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import React from 'react';
// import FormikRadio from '../../component/FormikRadio';
import FormikInput from '../../component/FormikTextInput';
import FormikSelect from '../../component/FormikSelect';

const Register = () => {
  const navigate = useNavigate();

  const onSubmitRegister = async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await fetch(' http://localhost:3000/register', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      console.log(json);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const validateRegister = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.country) {
      errors.country = 'Required';
    }
    if (!values.gender) {
      errors.gender = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password and Confirm Password should be same.';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: '',
        gender: '',
      }}
      onSubmit={onSubmitRegister}
      validate={validateRegister}
    >
      {({ isValid, isSubmitting, touched }) => {
        const isTouched = Object.keys(touched).length > 0;
        return (
          <Form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <Field
                component={FormikInput}
                name="name"
                autoComplete="name"
                placeholder="Name"
                isFirstInput
              />
              <Field
                component={FormikInput}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
              />
              <Field
                component={FormikSelect}
                name="country"
                placeholder="Please Select Country"
                label="Country"
                options={[
                  { text: 'India', value: 'in' },
                  { text: 'United States', value: 'us' },
                  { text: 'Canada', value: 'cn' },
                ]}
              />
              <Field
                component={FormikSelect}
                name="gender"
                placeholder="Please Select Gender"
                label="Gender"
                options={[
                  { value: 'male', text: 'Male' },
                  { value: 'female', text: 'Female' },
                  { value: 'other', text: 'Other' },
                ]}
              />
              <Field
                component={FormikInput}
                name="password"
                type="password"
                autoComplete="password"
                placeholder="Password"
              />
              <Field
                component={FormikInput}
                name="confirmPassword"
                type="password"
                autoComplete="password"
                placeholder="Confirm Password"
                isLastInput
              />
              {/* <Field
                component={FormikRadio}
                name="gender"
                options={[
                  { value: 'male', text: 'Male' },
                  { value: 'female', text: 'Female' },
                  { value: 'other', text: 'Other' },
                ]}
              /> */}
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
                Sign in
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Register;
