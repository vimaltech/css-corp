import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child2 from './Child2';
import Child1 from './Child1';

// Import file

// User Info
// First Name
// Last Name

// Display Full Name

// Props Or state value change that time component will rerender

// Life Cycle Method

// 1. Mounting
// -> constructor
// -> getDerivedStateFromProps
// -> render
// -> componentDidMount

// 2. Updating

// 3. UnMounting

// 4. Error

class App extends Component {
  // 1. base on props value derive state value
  // 2. Analytics
  // 3. Bind methods
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      greet: `Hello, ${props.name}`,
    };
    this.setCounter = this.setCounter.bind(this);
    console.log('constructor');
    // API call and pass data to server
  }

  state = {
    i: 0,
  };

  // base on state or props value define new State value
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      greet: `Hello, ${props.name}`,
    };
  }

  // Manipulate DOM element
  // Display Data on page load
  // register an event
  // Analytics
  componentDidMount() {
    // call only once
    console.log(document.getElementById('heading'));
    document.addEventListener('copy', () => {
      console.log('copied');
    });
    // API call and fetch data
    // set state base on fetch data
  }

  // state = {
  //   i: 0,
  // };

  // increment = () => {
  //   this.setState(({ i }) => ({
  //     i: i + 1,
  //   }));
  // };

  // decrement = () => {
  //   this.setState(({ i }) => ({
  //     i: i - 1,
  //   }));
  // };

  setCounter() {
    // const btnType = event.target.name;
    this.setState(({ i }) => ({
      i: i + 1,
    }));
  }

  // convert html into DOM
  render() {
    const { i, greet } = this.state;
    return (
      <>
        <h1 id="heading">{greet}</h1>
        <button type="button" name="increment" onClick={this.setCounter}>
          Incerement Counter
        </button>
        {i}
        <button type="button" name="decrement" onClick={this.setCounter}>
          Decrement Counter
        </button>
        <Child1 />
        <Child2 />
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
