import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: 'all',
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
        filterType: 'all',
      }),
      () => {
        // document.getElementById('todoText').value = '';
        this.inputRef.current.value = '';
      },
    );
  };

  toggleComplete = (item) => {
    // O(N)
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  handleFilter = (filterType) => {
    this.setState({
      filterType,
    });
  };

  render() {
    console.log('render');
    const { todoList, filterType } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" ref={this.inputRef} />
          <button type="submit">Add Todo</button>
        </form>
        <div className="todo-list">
          {todoList
            .filter((x) => {
              switch (filterType) {
                case 'pending':
                  return !x.isDone;
                case 'completed':
                  return x.isDone;
                default:
                  return true;
              }
            })
            .map((item) => (
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
                <button type="button" onClick={() => this.deleteTodo(item)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="filter-section">
          <button
            type="button"
            style={{
              borderColor: filterType === 'all' ? 'red' : 'gray',
            }}
            onClick={() => this.handleFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            style={{
              borderColor: filterType === 'pending' ? 'red' : 'gray',
            }}
            onClick={() => this.handleFilter('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            style={{
              borderColor: filterType === 'completed' ? 'red' : 'gray',
            }}
            onClick={() => this.handleFilter('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
