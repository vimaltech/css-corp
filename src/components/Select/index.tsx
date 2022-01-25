import React, { ComponentProps, memo } from 'react';
import { FieldProps } from 'formik';
import cn from 'classnames';
import { BorderProps } from 'types/borderProps';
import { SelectOptions } from 'types';

type Props = { options: SelectOptions[] } & BorderProps &
  FieldProps &
  ComponentProps<'select'>;

const Select = ({
  field,
  form: { touched, errors },
  options,
  isFirst,
  isLast,
  ...props
}: Props) => {
  const hasError = touched[field.name] && errors[field.name];
  return (
    <div>
      <label htmlFor={field.name} className="sr-only">
        {props.placeholder}
      </label>
      <select
        id={field.name}
        {...field}
        {...props}
        className={cn(
          'appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
          {
            'rounded-t-md': isFirst || hasError,
            'rounded-b-md': isLast || hasError,
            'border-red-300 focus:ring-red-500 focus:border-red-500':
              !!hasError,
          },
        )}
      >
        <option value="">{props.placeholder}</option>
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.text}
          </option>
        ))}
      </select>
      {hasError && (
        <p className="text-red-400 text-sm my-1">{errors[field.name]}</p>
      )}
    </div>
  );
};

export default memo(Select);
