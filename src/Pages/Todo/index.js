import React, { PureComponent, createRef } from 'react';
import loadable from '@loadable/component';
// import format from 'date-fns/format';
// import TodoFilter from './todoFilter';
// import TodoForm from './todoForm';
// import TodoList from './todoList';

// cont giveMePath = (path) => {
//   return loadable(
//     () => import(/* webpackChunkName: "TodoFilter" */ `${path}`),
//     { fallback: <h1>Loading...</h1> },
//   )
// }

const TodoFilter = loadable(
  () => import(/* webpackChunkName: "TodoFilter" */ './todoFilter'),
  { fallback: <h1>Loading...</h1> },
);
const TodoForm = loadable(
  () => import(/* webpackChunkName: "TodoForm" */ './todoForm'),
  { fallback: <h1>Loading...</h1> },
);
const TodoList = loadable(
  () => import(/* webpackChunkName: "TodoList" */ './todoList'),
  { fallback: <h1>Loading...</h1> },
);

export default class Todo extends PureComponent {
  state = {
    todoList: [],
    filterType: 'all',
    httpStatus: [],
  };

  inputRef = createRef();

  componentDidMount() {
    this.loadTodo('all');
  }

  loadingStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => {
      const index = httpStatus.findIndex((x) => x.type === type && x.id === id);
      const data = { type, status: 'REQUEST', id };
      if (index === -1) {
        return {
          httpStatus: [...httpStatus, data],
        };
      }
      return [
        ...httpStatus.slice(0, index),
        data,
        ...httpStatus.slice(index + 1),
      ];
    });
  };

  successStatus = ({ type, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.filter((x) => !(x.type === type && x.id === id)),
    }));
  };

  errorStatus = ({ type, payload, id = -1 }) => {
    this.setState(({ httpStatus }) => ({
      httpStatus: httpStatus.map((x) => {
        if (x.type === type && x.id === id) {
          return { ...x, status: 'FAIL', payload };
        }
        return x;
      }),
    }));
  };

  loadTodo = async (filterType) => {
    const type = 'LOAD_TODO';
    try {
      this.loadingStatus({ type });
      let url = 'http://localhost:3000/todo-list';
      if (filterType !== 'all') {
        url = `${url}?isDone=${filterType === 'completed'}`;
      }
      const res = await fetch(url);
      const json = await res.json();
      // throw new Error('Load todo fail');
      this.setState({
        todoList: json,
        filterType,
      });
      this.successStatus({ type });
    } catch (error) {
      this.errorStatus({ type, payload: error });
    }
  };

  addTodo = async (event) => {
    const type = 'ADD_TODO';
    try {
      event.preventDefault();
      this.loadingStatus({ type });
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
      this.successStatus({ type });
    } catch (error) {
      this.errorStatus({ type, payload: error });
    }
  };

  toggleComplete = async (item) => {
    const type = 'UPDATE_TODO';

    try {
      this.loadingStatus({ type, id: item.id });
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
      this.successStatus({ type, id: item.id });
    } catch (error) {
      this.errorStatus({ type, payload: error, id: item.id });
    }
  };

  deleteTodo = async (item) => {
    const type = 'DELETE_TODO';
    try {
      this.loadingStatus({ type, id: item.id });
      await fetch(`http://localhost:3000/todo-list/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
      this.successStatus({ type, id: item.id });
    } catch (error) {
      this.errorStatus({ type, payload: error, id: item.id });
    }
  };

  render() {
    console.log('render');
    const { todoList, filterType, httpStatus } = this.state;

    const loadStatus = httpStatus.find((x) => x.type === 'LOAD_TODO');
    const addStatus = httpStatus.find((x) => x.type === 'ADD_TODO');
    const todoListStatus = httpStatus.filter(
      (x) => x.type === 'UPDATE_TODO' || x.type === 'DELETE_TODO',
    );

    return (
      <div className="h-screen flex flex-col bg-slate-200 md:bg-green-300 ">
        {loadStatus?.status === 'REQUEST' && <h1>Api is calling...</h1>}
        {loadStatus?.status === 'FAIL' && <h1>{loadStatus.payload.message}</h1>}
        <h1 className="text-4xl text-center my-4 font-bold text-red-400">
          Todo App
        </h1>

        <TodoForm
          addTodo={this.addTodo}
          ref={this.inputRef}
          httpStatus={addStatus}
        />
        {todoList.length > 0 ? (
          <TodoList
            todoList={todoList}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            httpStatus={todoListStatus}
          />
        ) : (
          <div className="h-screen">
            <h1 className="text-center">Please add task</h1>
          </div>
        )}

        <TodoFilter filterType={filterType} handleFilter={this.loadTodo} />
      </div>
    );
  }
}
