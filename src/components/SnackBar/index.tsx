import React, { useEffect, useMemo } from 'react';

type Props = {
  index: number;
  message: string;
  title: string;
  onCancel: () => void;
};

const SnackBar = ({ message, title, onCancel, index }: Props) => {
  // component DId mount
  useEffect(() => {
    const timer = setTimeout(onCancel, 5000);
    // component will unmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  const bottom = useMemo(() => `${index * 56}px`, [index]);

  return (
    <div
      className="fixed left-0 w-screen md:w-1/3"
      style={{
        bottom,
      }}
    >
      <div
        className="flex justify-between items-center m-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
        role="alert"
      >
        <div>
          <strong className="font-bold">{title}:</strong>
          <span className="pl-2 block sm:inline">{message}</span>
        </div>
        <span>
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={onCancel}
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SnackBar;
