import { AuthContext } from 'context/authContext';
import { useCallback, useContext } from 'react';

const useError = () => {
  const { onLogout } = useContext(AuthContext);

  const handleError = useCallback(
    (error: any) => {
      let message = 'Something went wrong. Try after somtime';
      if (error instanceof Error) {
        console.log(error.message);
        message = error.message;
      }
      if (message === '401') {
        onLogout();
      }
      return message;
    },
    [onLogout],
  );

  return handleError;
};

export default useError;
