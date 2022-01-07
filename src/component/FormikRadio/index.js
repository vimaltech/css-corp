import React from 'react';

const FormikRadio = ({
  field: { name, value },
  form: { setFieldValue },
  options,
}) => (
  <fieldset>
    <div className="mt-4">
      <legend className="text-base font-medium text-gray-900">Gender</legend>
    </div>
    <div className="mt-4 space-x-4 flex">
      {options.map((option) => (
        <div className="flex items-center" key={option.value}>
          <input
            id={option.value}
            name={name}
            type="radio"
            checked={option.value === value}
            onChange={() => {
              setFieldValue(name, option.value, true);
            }}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label
            htmlFor={option.value}
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            {option.text}
          </label>
        </div>
      ))}
    </div>
  </fieldset>
);

export default FormikRadio;
