const initialState = [
  {
    id: 1,
    todo: 'Recolectar manzanas',
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === '[Todo] Add todo') {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar pan',
  done: false,
};

const addTodoAction = {
  type: '[Todo] Add todo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
