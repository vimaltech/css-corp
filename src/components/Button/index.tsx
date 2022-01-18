import React, { ComponentProps } from 'react';

type ButtonProps = {
  children: string;
  icon?: any;
};

export type BtnProps = ButtonProps &
  Omit<ComponentProps<'button'>, keyof ButtonProps>;

const Button = ({ children, icon: Icon, ...props }: BtnProps) => {
  return (
    <button
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...props}
    >
      {Icon && (
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <Icon fill="rgb(99 102 241 / 1)" />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
