import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo }, ref) => {
  console.log('TodoForm render');
  return (
    <form onSubmit={addTodo} className="flex justify-center my-4">
      <input type="text" ref={ref} />
      <button type="submit" className="btn-primary">
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
