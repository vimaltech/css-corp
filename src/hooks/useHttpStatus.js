import { useState, useCallback } from 'react';

const useHttpStatus = () => {
  const [httpStatus, setHttpStatus] = useState([]);

  const loadingStatus = useCallback(({ type, id = -1 }) => {
    setHttpStatus((val) => {
      const index = val.findIndex((x) => x.type === type && x.id === id);
      const data = { type, status: 'REQUEST', id };
      if (index === -1) {
        return [...val, data];
      }
      return [...val.slice(0, index), data, ...val.slice(index + 1)];
    });
  }, []);

  const successStatus = useCallback(({ type, id = -1 }) => {
    setHttpStatus((val) =>
      val.filter((x) => !(x.type === type && x.id === id)),
    );
  }, []);

  const errorStatus = useCallback(({ type, payload, id = -1 }) => {
    setHttpStatus((val) =>
      val.map((x) => {
        if (x.type === type && x.id === id) {
          return { ...x, status: 'FAIL', payload };
        }
        return x;
      }),
    );
  }, []);

  return {
    httpStatus,
    loadingStatus,
    successStatus,
    errorStatus,
  };
};

export default useHttpStatus;
