import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import file

// User Info
// First Name
// Last Name

// Display Full Name

// Props Or state value change that time component will rerender
class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  // static defaultProps = {
  //   caption: 'Great day...',
  // };

  state = {
    i: 0,
    greet: '',
  };

  incrementCounter = () => {
    // const { i } = this.state;
    // this.setState({
    //   i: i + 1,
    // });
    this.setState((prevState, props) => ({
      i: prevState.i + 1,
    }));
  };

  greetUser = () => {
    this.setState(({ i }, props) => ({
      greet: `Hello, ${props.name}`,
      i: i + 1,
    }));
  };

  render() {
    console.log('render');
    const { name } = this.props;
    const { i, greet } = this.state;
    return (
      <>
        <h1>{greet}</h1>
        <p>{i}</p>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
        <button type="button" onClick={this.greetUser}>
          Greet User
        </button>
        {/* attach user info component Here.. */}
      </>
    );
  }
}

// const App = ({ title, caption }) => (
//   <>
//     <h1>{title}</h1>
//     <h2>{caption}</h2>
//   </>
// );

// App.propTypes = {
//   title: PropTypes.string.isRequired,
//   caption: PropTypes.string,
// };

// App.defaultProps = {
//   caption: 'Great day...',
// };

export default App;
