import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

export const LoadingContext = createContext();

class LoadingProvider extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <LoadingContext.Provider value="">{children}</LoadingContext.Provider>
    );
  }
}

LoadingProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LoadingProvider;
