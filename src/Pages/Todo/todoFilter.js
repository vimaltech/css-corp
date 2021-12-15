import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoFilter = ({ filterType, handleFilter }) => {
  console.log('TodoFilter render');
  return (
    <div className="flex">
      <button
        type="button"
        className="flex-1 btn-primary"
        style={{
          borderColor: filterType === 'all' ? 'red' : 'gray',
        }}
        onClick={() => handleFilter('all')}
      >
        All
      </button>
      <button
        type="button"
        className="flex-1 btn-primary"
        style={{
          borderColor: filterType === 'pending' ? 'red' : 'gray',
        }}
        onClick={() => handleFilter('pending')}
      >
        Pending
      </button>
      <button
        type="button"
        className="flex-1 btn-primary"
        style={{
          borderColor: filterType === 'completed' ? 'red' : 'gray',
        }}
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
