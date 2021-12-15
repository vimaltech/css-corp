import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoList = ({ todoList, filterType, toggleComplete, deleteTodo }) => {
  console.log('TodoList render');
  return (
    <div className="flex-1">
      {todoList
        .filter((x) => {
          switch (filterType) {
            case 'pending':
              return !x.isDone;
            case 'completed':
              return x.isDone;
            default:
              return true;
          }
        })
        .map((item) => (
          <div className="flex items-center m-4" key={item.id}>
            <input
              type="checkbox"
              checked={item.isDone}
              onChange={() => toggleComplete(item)}
            />
            <p
              className={cn('flex-1 px-4 ', {
                'line-through': item.isDone,
              })}
            >
              {item.text}
            </p>
            <button type="button" onClick={() => deleteTodo(item)}>
              Delete
            </button>
          </div>
        ))}
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
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoList);
