import React, { PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Child2 extends PureComponent {
  state = {
    counter: 0,
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps.counter);
  //   // console.log(this.props.counter);
  //   // if (nextProps.counter < this.props.counter) {
  //   //   return true;
  //   // }
  //   // return false;
  //   return shallowCompare(this, nextProps, nextState);
  //   // if (this.props !== nextProps || this.state !== nextState) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

  // mouseMove = () => {
  //   console.log('mouse moved');
  // };

  // componentDidMount() {
  //   document.addEventListener('mousemove', this.mouseMove);
  //   this.interval = setInterval(() => {
  //     console.log('hello interval');
  //   }, 1000);
  // }

  // clear events
  // clear timers
  // cancel http requests
  // componentWillUnmount() {
  //   document.removeEventListener('mousemove', this.mouseMove);
  //   clearInterval(this.interval);
  // }

  incrementCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    console.log('child 2 render');
    const { user } = this.props;
    const { counter } = this.state;
    console.log(user);
    if (counter > 5) {
      throw new Error('something went wrong...');
    }
    return (
      <div>
        <h1>Hello from child 2</h1>
        <h2>{user.name}</h2>
        <h2>{counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }
}
