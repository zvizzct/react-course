import { todoReducer } from '../../components/08-useReducer/todoReducer';

describe('Testing on 08-useReducer todoReducer ', () => {
  const initialState = [
    {
      id: new Date().getTime(),
      desc: 'Aprender React',
      done: false,
    },
  ];
  test('should return the default state', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test('should add a new todo', () => {
    const newTodo = {
      id: new Date().getTime(),
      desc: 'Aprender Mongo',
      done: false,
    };
    const newState = todoReducer(initialState, {
      type: 'add',
      payload: newTodo,
    });
    expect(newState.length).toBe(2);
    expect(newState).toEqual([...initialState, newTodo]);
    expect(newState).toContain(newTodo);
  });
  test('should delete a todo', () => {
    const newTodo = {
      id: 123,
      desc: 'Aprender Mongo',
      done: false,
    };
    const State = todoReducer(initialState, {
      type: 'add',
      payload: newTodo,
    });
    expect(State.length).toBe(2);
    const newState = todoReducer(State, {
      type: 'delete',
      payload: newTodo.id,
    });
    expect(newState.length).toBe(1);
  });

  test('should toggle a todo', () => {
    const newTodo = {
      id: 123,
      desc: 'Aprender Mongo',
      done: false,
    };
    const State = todoReducer(initialState, {
      type: 'add',
      payload: newTodo,
    });
    expect(State.length).toBe(2);
    const newState = todoReducer(State, {
      type: 'toggle',
      payload: newTodo.id,
    });
    const newState2 = todoReducer(newState, {
      type: 'toggle',
      payload: newTodo.id,
    });
    expect(newState.length).toBe(2);
    expect(newState[1].done).toBe(true);
    expect(newState2[1].done).toBe(false);
  });
});
