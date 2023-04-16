import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (val = 1) => {
    setCounter((cn) => cn + val);
  };

  const decrement = (val) => {
    if (counter === 0 || val > counter) return;
    setCounter((cn) => cn - val);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
