import React, { forwardRef, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo, httpStatus }, ref) => {
  console.log('TodoForm Render');
  return (
    <form onSubmit={addTodo} className="flex justify-center my-4" noValidate>
      <input type="text" ref={ref} />
      <button
        type="submit"
        className={cn('btn-primary', {
          'bg-gray-400': httpStatus?.status === 'REQUEST',
          'text-white': httpStatus?.status === 'REQUEST',
        })}
        disabled={httpStatus?.status === 'REQUEST'}
      >
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  httpStatus: PropTypes.shape({
    status: PropTypes.oneOf(['REQUEST', 'FAIL']),
    type: PropTypes.oneOf(['ADD_TODO']),
    payload: PropTypes.objectOf(Error),
  }),
};

TodoForm.defaultProps = {
  httpStatus: undefined,
};

export default memo(TodoForm);
