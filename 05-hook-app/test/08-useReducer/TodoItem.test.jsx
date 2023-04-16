import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Testing on 08-useReducer <TodoItem/>', () => {
  const todo = {
    id: 1,
    desc: 'Leer clean code',
    done: false,
  };
  const handleDeleteMock = jest.fn();
  const handleToggleMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return todo pending', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={handleDeleteMock}
        onToggleTodo={handleToggleMock}
      />
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe('align-self-center ');
  });

  test('should return todo completed', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={handleDeleteMock}
        onToggleTodo={handleToggleMock}
      />
    );
    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe(
      'align-self-center text-decoration-line-through'
    );
  });

  test('span should call ToggleTodo onclik', () => {
    todo.done = false;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={handleDeleteMock}
        onToggleTodo={handleToggleMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    fireEvent.click(spanElement);

    expect(handleToggleMock).toHaveBeenCalledWith(todo.id);
  });

  test('button should call deleTodo onclick', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={handleDeleteMock}
        onToggleTodo={handleToggleMock}
      />
    );
    const btnDelete = screen.getByRole('button');
    fireEvent.click(btnDelete);
    expect(handleDeleteMock).toHaveBeenCalledWith(todo.id);
  });
});
