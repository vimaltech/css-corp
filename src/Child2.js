import React, { Component } from 'react';

export default class Child2 extends Component {
  state = {};

  render() {
    console.log('child 2 render');
    return (
      <div>
        <h1>Hello from child 2</h1>
      </div>
    );
  }
}
