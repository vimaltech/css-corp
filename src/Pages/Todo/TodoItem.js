import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoItem = ({ item, toggleComplete, deleteTodo }) => (
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
);

TodoItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    isDone: PropTypes.bool,
    text: PropTypes.string,
  }).isRequired,
};

export default memo(TodoItem);
