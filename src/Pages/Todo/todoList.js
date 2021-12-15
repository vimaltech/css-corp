import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, toggleComplete, deleteTodo }) => {
  console.log('TodoList render');
  return (
    <div className="flex-1">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
      {/* {todoList.reduce((p, item) => {
        const ui = (
          <TodoItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        );
        switch (filterType) {
          case 'pending':
            if (item.isDone === false) {
              return [...p, ui];
            }
            break;
          case 'completed':
            if (item.isDone === true) {
              return [...p, ui];
            }
            break;

          default:
            return [...p, ui];
        }
        return p;
      }, [])} */}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      text: PropTypes.string,
      isDone: PropTypes.bool,
    }),
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
