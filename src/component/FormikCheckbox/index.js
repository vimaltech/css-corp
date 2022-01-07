import React from 'react';

const FormikCheckbox = ({ field: { name, value, onChange }, ...props }) => (
  <div className="flex items-center">
    <input
      id={name}
      type="checkbox"
      name={name}
      checked={value}
      onChange={onChange}
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    />
    <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
      {props.label}
    </label>
  </div>
);

export default FormikCheckbox;
