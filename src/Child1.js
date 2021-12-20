import React, { memo, useEffect } from 'react';

const Child1 = () => {
  // componentWillUnmount
  useEffect(() => {
    const mouseMove = () => {
      console.log('mousemove');
    };

    document.addEventListener('mousemove', mouseMove);

    const interval = setInterval(() => {
      console.log('interval');
    }, 1000);

    // component will unmount
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1>Hello from child 1</h1>
    </div>
  );
};

export default memo(Child1, (prevProps, nextProps) => {
  if (nextProps.counter > prevProps.counter) {
    return false;
  }
  return true;
});
