import Button, { BtnProps } from 'components/Button';
import { Field, Form, Formik, FormikConfig } from 'formik';
import React from 'react';

type Props = {
  children: React.ReactNode;
  btnProps: BtnProps;
};

const CustomForm = ({ fields, children, btnProps, ...props }: Props) => {
  return (
    <Formik {...props}>
      {() => (
        <Form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {fields.map((x) => (
              <Field key={x.name} {...x} />
            ))}
          </div>
          {children}

          <Button {...btnProps} />
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
