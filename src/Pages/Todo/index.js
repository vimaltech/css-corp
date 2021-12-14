import React, { PureComponent, createRef } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
    error: null,
  };

  inputRef = createRef();

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/todo-list');
      const json = await res.json();
      this.setState({ todoList: json });
    } catch (error) {
      this.setState({ error });
    }
  }

  addTodo = (event) => {
    event.preventDefault();
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
    const { todoList, filterType, error } = this.state;
    return (
      <div className="h-screen flex flex-col sm:bg-green-300 bg-slate-200">
        {error && (
          <h1 className="text-center text-red-700">Something went wrong</h1>
        )}
        <h1 className="text-4xl text-center my-4 font-bold text-red-400">
          Todo App
        </h1>
        <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        <TodoList
          filterType={filterType}
          todoList={todoList}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
        <TodoFilter filterType={filterType} handleFilter={this.handleFilter} />
      </div>
    );
  }
}
