import React, { Component, createRef } from 'react';
import cn from 'classnames';

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
      <div className="h-screen flex flex-col sm:bg-green-300 bg-slate-200">
        <h1 className="text-4xl text-center my-4 font-bold text-red-400">
          Todo App
        </h1>
        <form onSubmit={this.addTodo} className="flex justify-center my-4">
          <input type="text" ref={this.inputRef} />
          <button type="submit" className="btn-primary">
            Add Todo
          </button>
        </form>
        <div className="flex-1">
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
              <div className="flex items-center m-4" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => this.toggleComplete(item)}
                />
                <p
                  className={cn('flex-1 px-4 ', {
                    'line-through': item.isDone,
                  })}
                >
                  {item.text}
                </p>
                <button type="button" onClick={() => this.deleteTodo(item)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
        <div className="flex">
          <button
            type="button"
            className="flex-1 btn-primary"
            style={{
              borderColor: filterType === 'all' ? 'red' : 'gray',
            }}
            onClick={() => this.handleFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className="flex-1 btn-primary"
            style={{
              borderColor: filterType === 'pending' ? 'red' : 'gray',
            }}
            onClick={() => this.handleFilter('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            className="flex-1 btn-primary"
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
