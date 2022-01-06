import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

export const ErrorContext = createContext();

class ErrorProvider extends PureComponent {
  render() {
    const { children } = this.props;
    return <ErrorContext.Provider value="">{children}</ErrorContext.Provider>;
  }
}

ErrorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorProvider;
