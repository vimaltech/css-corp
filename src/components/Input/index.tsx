import React, { LabelHTMLAttributes } from 'react';
import { FieldProps } from 'formik';
import cn from 'classnames';

type Props = {
  label: string;
  isFirst?: boolean;
  isLast?: boolean;
} & FieldProps;

const Input = ({
  field,
  form: { touched, errors },
  label,
  isFirst,
  isLast,
  ...props
}: Props) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <div>
      <label htmlFor={field.name} className="sr-only">
        {label}
      </label>
      <input
        id={field.name}
        autoComplete="email"
        className={cn(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          {
            'rounded-t-md': isFirst,
            'rounded-b-md': isLast,
            'border-red-300 focus:ring-red-500 focus:border-red-500':
              !!hasError,
          },
        )}
        placeholder={label}
        {...field}
        {...props}
      />
    </div>
  );
};

export default Input;
