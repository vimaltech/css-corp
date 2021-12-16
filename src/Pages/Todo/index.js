import React, { PureComponent, createRef, lazy, Suspense } from 'react';
// import format from 'date-fns/format';
// import TodoFilter from './todoFilter';
// import TodoForm from './todoForm';
// import TodoList from './todoList';

const TodoFilter = lazy(() =>
  import(/* webpackChunkName: "TodoFilter" */ './todoFilter'),
);
const TodoForm = lazy(() =>
  import(/* webpackChunkName: "TodoForm" */ './todoForm'),
);
const TodoList = lazy(() =>
  import(/* webpackChunkName: "TodoList" */ './todoList'),
);

export default class Todo extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
    error: null,
  };

  inputRef = createRef();

  componentDidMount() {
    this.loadTodo('all');
  }

  loadTodo = async (filterType) => {
    try {
      let url = 'http://localhost:3000/todo-list';
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      this.setState({ todoList: json, filterType });
    } catch (error) {
      this.setState({ error });
    }
  };

  addTodo = async (event) => {
    try {
      event.preventDefault();
      const todoText = this.inputRef.current.value;

      if (!todoText) throw new Error('Please Enter Data..');

      const format = (await import('date-fns/format')).default;
      const res = await fetch('http://localhost:3000/todo-list', {
        method: 'POST',
        body: JSON.stringify({
          text: todoText,
          isDone: false,
          timeStamp: format(new Date(), 'MM-dd-yy HH:mm'),
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(
        ({ todoList }) => ({
          todoList: [...todoList, json],
          filterType: 'all',
        }),
        () => {
          this.inputRef.current.value = '';
        },
      );
    } catch (error) {
      this.setState({
        error,
      });
    }
  };

  toggleComplete = async (item) => {
    try {
      const res = await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {}
  };

  deleteTodo = async (item) => {
    try {
      await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {}
  };

  render() {
    console.log('render');
    const { todoList, filterType, error } = this.state;
    return (
      <div className="h-screen flex flex-col sm:bg-green-300 bg-slate-200">
        {error && <h1 className="text-center text-red-700">{error.message}</h1>}
        <h1 className="text-4xl text-center my-4 font-bold text-red-400">
          Todo App
        </h1>
        <Suspense
          fallback={
            <h1 className="text-center text-red-400">Loading Todo Form...</h1>
          }
        >
          <TodoForm addTodo={this.addTodo} ref={this.inputRef} />
        </Suspense>
        {todoList.length > 0 ? (
          <Suspense
            fallback={
              <h1 className="text-center text-green-400">
                Loading Todo List...
              </h1>
            }
          >
            <TodoList
              todoList={todoList}
              toggleComplete={this.toggleComplete}
              deleteTodo={this.deleteTodo}
            />
          </Suspense>
        ) : (
          <div className="h-screen">
            <h1 className="text-center">Please add task</h1>
          </div>
        )}
        <Suspense
          fallback={
            <h1 className="text-center text-purple-400">
              Loading Todo Filter...
            </h1>
          }
        >
          <TodoFilter filterType={filterType} handleFilter={this.loadTodo} />
        </Suspense>
      </div>
    );
  }
}
