import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoFilter = ({ filterType, handleFilter }) => {
  console.log('TodoFilter render');
  return (
    <div className="flex">
      <button
        type="button"
        className={cn('flex-1 btn-primary', {
          'bg-green-200': filterType === 'all',
        })}
        onClick={() => handleFilter('all')}
      >
        All
      </button>
      <button
        type="button"
        className={cn('flex-1 btn-primary', {
          'bg-green-200': filterType === 'pending',
        })}
        onClick={() => handleFilter('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className={cn('flex-1 btn-primary', {
          'bg-green-200': filterType === 'completed',
        })}
        onClick={() => handleFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TodoFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
};

export default memo(TodoFilter);
