import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ addTodo }, ref) => (
  <form onSubmit={addTodo} className="flex justify-center my-4" noValidate>
    <input type="text" ref={ref} required />
    <button type="submit" className="btn-primary">
      Add Todo
    </button>
  </form>
));

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default memo(TodoForm);
