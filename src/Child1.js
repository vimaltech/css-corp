import React, { memo } from 'react';

const Child1 = () => {
  console.log('Child 1 render');
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
