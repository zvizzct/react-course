import { useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const addTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  const deleteTodo = (todoId) => {
    dispatch({
      type: 'delete',
      payload: todoId,
    });
  };

  const toggleTodo = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    todosPending: todos.filter((todo) => todo.done === false).length,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};
