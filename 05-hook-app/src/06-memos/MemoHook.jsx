import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iter = 100) => {
  for (let i = 0; i < iter; i++) {
    console.log('Ahi vamos...');
  }
  return `${iter} iteraciones realizadas.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter:<small>{counter}</small>
      </h1>
      <h4>{memorizedValue}</h4>
      <hr />
      <button className="btn btn-rpimary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        {' '}
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
