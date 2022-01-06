import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/themeContext';

const TodoItem = ({
  item, toggleComplete, deleteTodo, httpStatus,
}) => {
  console.log('TodoItem Render');
  return (
    <div className="flex items-center m-4" key={item.id}>
      <input
        type="checkbox"
        checked={item.isDone}
        disabled={httpStatus.some(
          (x) => x.type === 'UPDATE_TODO' && x.status === 'REQUEST',
        )}
        onChange={() => toggleComplete(item)}
      />
      <p
        className={cn('flex-1 px-4 ', {
          'line-through': item.isDone,
        })}
      >
        {item.text}
      </p>
      <p>{item.timeStamp}</p>
      <ThemeContext.Consumer>
        {({ theme }) => <p>{theme}</p>}
      </ThemeContext.Consumer>
      <button
        type="button"
        className={cn('bg-blue-500 text-white px-4 py-2 rounded mx-2', {
          'bg-slate-400': httpStatus.some(
            (x) => x.type === 'DELETE_TODO' && x.status === 'REQUEST',
          ),
          'text-black': httpStatus.some(
            (x) => x.type === 'DELETE_TODO' && x.status === 'REQUEST',
          ),
        })}
        disabled={httpStatus.some(
          (x) => x.type === 'DELETE_TODO' && x.status === 'REQUEST',
        )}
        onClick={() => deleteTodo(item)}
      >
        Delete
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    isDone: PropTypes.bool,
    text: PropTypes.string,
    timeStamp: PropTypes.string,
  }).isRequired,
  httpStatus: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      status: PropTypes.oneOf(['REQUEST', 'FAIL']),
      id: PropTypes.number,
      payload: PropTypes.objectOf(Error),
    }),
  ).isRequired,
};

export default memo(
  TodoItem,
  (prevProps, nextProps) =>
    prevProps.item.id === nextProps.item.id
    && prevProps.item.isDone === nextProps.item.isDone,
);
