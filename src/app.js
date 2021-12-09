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
// -> getDerivedStateFromProps
// -> shouldComponentUpdate(M - IMP)
// -> render
// -> getSnapshotBeforeUpdate
// -> componentDidUpdate

// 3. UnMounting
// -> componentWillUnmount(M - IMP)

// 4. Error
// -> getDerivedStateFromError
// -> componentDidCatch

class App extends Component {
  // 1. base on props value derive state value
  // 2. Analytics
  // 3. Bind methods
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      greet: `Hello, ${props.name}`,
      user: {
        name: 'Yagnesh',
        age: 30,
      },
    };
    this.setCounter = this.setCounter.bind(this);
    console.log('constructor');
    // API call and pass data to server
  }

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

  // capture currant screen
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  // manipulate dom
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    };
  }

  componentDidCatch(error, info) {
    // log the errors
    console.log(error);
    console.log(info);
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

  setCounter(val) {
    // const btnType = event.target.name;
    this.setState(({ i }) => ({
      i: i + val,
    }));
  }

  changeUserName = () => {
    this.setState(({ user }) => ({
      user: { ...user, name: 'virat' },
    }));
  };

  // convert html into DOM
  render() {
    const { i, greet, user, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <>
        <h1 id="heading">{greet}</h1>
        <button
          type="button"
          name="increment"
          onClick={() => this.setCounter(1)}
        >
          Incerement Counter
        </button>
        {i}
        <button
          type="button"
          name="decrement"
          onClick={() => this.setCounter(-1)}
        >
          Decrement Counter
        </button>
        <h2>{user.name}</h2>
        <Child1 counter={i} />
        {i < 5 && <Child2 user={user} />}
        <button type="button" onClick={this.changeUserName}>
          Change Username
        </button>
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
