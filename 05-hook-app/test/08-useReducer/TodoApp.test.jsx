import { render, screen } from '@testing-library/react';
import { useTodo } from '../../src/hooks/useTodo';
import { TodoApp } from '../../src/08-useReducer/TodoApp';

jest.mock('../../src/hooks/useTodo');

describe('Testing on <TodoApp/>', () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, desc: 'Aprender React', done: false },
      { id: 2, desc: 'Aprender Mongo', done: false },
    ],
    todosCount: 2,
    todosPending: 2,
    addTodo: jest.fn(),
    deleteTodo: jest.fn(),
    toggleTodo: jest.fn(),
  });
  test('should return component', () => {
    render(<TodoApp />);
    expect(screen.getByText('TodoApp: 2,')).toBeTruthy();
    expect(screen.getByText('pendientes: 2')).toBeTruthy();
    expect(screen.getByText('Aprender React')).toBeTruthy();
    expect(screen.getByText('Aprender Mongo')).toBeTruthy();
  });
});
