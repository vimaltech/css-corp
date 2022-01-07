import React from 'react';
import cn from 'classnames';

const FormikInput = ({
  field,
  form: { touched, errors },
  isFirstInput,
  isLastInput,
  ...props
}) => (
  <div>
    <label htmlFor={field.name} className="sr-only">
      {props.placeholder}
    </label>
    <input
      id={field.name}
      className={cn(
        'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
        {
          'border-red-300': touched[field.name] && !!errors[field.name],
          'focus:border-red-500': touched[field.name] && !!errors[field.name],
          'rounded-t-md': isFirstInput,
          'rounded-b-md': isLastInput,
        },
      )}
      {...field}
      {...props}
    />
    {touched[field.name] && !!errors[field.name] && <p>{errors[field.name]}</p>}
  </div>
);

export default FormikInput;
