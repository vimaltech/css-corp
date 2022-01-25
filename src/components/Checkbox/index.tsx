import React, { ComponentProps, memo } from 'react';
import { FieldProps } from 'formik';

type Props = {} & FieldProps & ComponentProps<'label'>;

const Checkbox = ({ field, ...props }: Props) => {
  return (
    <div className="flex items-center">
      <input
        id="remember-me"
        type="checkbox"
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        {...field}
      />
      <label
        htmlFor="remember-me"
        className="ml-2 block text-sm text-gray-900"
        {...props}
      />
    </div>
  );
};

export default memo(Checkbox);
