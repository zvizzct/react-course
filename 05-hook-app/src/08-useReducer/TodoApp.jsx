import { useEffect } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {
  const { todos, todosCount, todosPending, addTodo, deleteTodo, toggleTodo } =
    useTodo([]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {todosPending}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={deleteTodo}
            onToggleTodo={toggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd
            onNewTodo={(e) => {
              addTodo(e);
            }}
          />
        </div>
      </div>
    </>
  );
};
