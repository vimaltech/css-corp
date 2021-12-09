import React, { PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Child2 extends PureComponent {
  state = {};

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

  render() {
    console.log('child 2 render');
    const { user } = this.props;
    console.log(user);
    return (
      <div>
        <h1>Hello from child 2</h1>
        <h2>{user.name}</h2>
      </div>
    );
  }
}
