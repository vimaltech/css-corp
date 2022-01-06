import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { loginTitle, RegisterTitle } from '../../constants/appConstants';

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {`${location.pathname === '/' ? loginTitle : RegisterTitle}`}
          </h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
