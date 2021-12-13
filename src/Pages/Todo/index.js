import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class Todo extends Component {
  state = {
    todoList: [],
  };

  inputRef = createRef();

  addTodo = (event) => {
    event.preventDefault();
    // const todoText = document.getElementById('todoText').value;
    const todoText = this.inputRef.current.value;
    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          { id: new Date().valueOf(), text: todoText, isDone: false },
        ],
      }),
      () => {
        // document.getElementById('todoText').value = '';
        this.inputRef.current.value = '';
      },
    );
  };

  toggleComplete = (item) => {
    console.log(item);

    this.setState(({ todoList }) => ({
      todoList: todoList.map((x) => {
        if (x.id === item.id) {
          return { ...x, isDone: !x.isDone };
        }
        return x;
      }),
    }));
  };

  render() {
    console.log('render');
    const { todoList } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Add Todo</button>
        </form>
        <div className="todo-list">
          {todoList.map((item) => (
            <div className="todo-item" key={item.id}>
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => this.toggleComplete(item)}
              />
              <p
                style={{
                  textDecoration: item.isDone ? 'line-through' : 'none',
                }}
              >
                {item.text}
              </p>
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
