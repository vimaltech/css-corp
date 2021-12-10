import React, { Component } from 'react';
import './todoStyle.css';

export default class Todo extends Component {
  state = {
    todoText: '',
    todoList: [],
  };

  onChangeText = (event) => {
    const text = event.target.value;
    this.setState({
      todoText: text,
    });
  };

  addTodo = (event) => {
    event.preventDefault();
    this.setState(({ todoList, todoText }) => ({
      todoList: [...todoList, todoText],
      todoText: '',
    }));
  };

  render() {
    const { todoText, todoList } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" value={todoText} onChange={this.onChangeText} />
          <button type="submit">Add Todo</button>
        </form>
        <div className="todo-list">
          {todoList.map((item) => (
            <div className="todo-item">
              <input type="checkbox" name="isDone" id="isDone" />
              <p>{item}</p>
              <button type="button">Delete</button>
            </div>
          ))}
        </div>
        <div className="filter-section">
          <button type="button">All</button>
          <button type="button">Pending</button>
          <button type="button">Completed</button>
        </div>
      </div>
    );
  }
}
