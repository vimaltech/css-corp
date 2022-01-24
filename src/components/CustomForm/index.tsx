import Button, { BtnProps } from 'components/Button';
import {
  Field,
  FieldAttributes,
  Form,
  Formik,
  FormikConfig,
  FormikValues,
} from 'formik';
import React from 'react';
import { FieldsProps } from 'types/fieldsProps';

type Props<T> = {
  children?: React.ReactNode;
  btnProps: BtnProps;
  fields: FieldsProps<T>[];
} & FormikConfig<T>;

const CustomForm = <T extends FormikValues>({
  fields,
  children,
  btnProps,
  ...props
}: Props<T>) => {
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
