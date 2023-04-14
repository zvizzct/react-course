export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'add':
      return [...initialState, action.payload];
    case 'delete':
      return initialState.filter((todo) => {
        return todo.id !== action.payload;
      });
    case 'toggle':
      initialState.find((todo) => todo.id === action.payload);
      return initialState.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo;
      });
    default:
      return initialState;
  }
};
