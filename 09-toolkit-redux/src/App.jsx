import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  reset,
  incrementBy
} from './store/slices/counter'

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <button onClick={() => dispatch(decrement())}> -1 </button>
          <button onClick={() => dispatch(reset())}>reset</button>
          <button onClick={() => dispatch(increment())}> +1 </button>
          <button onClick={() => dispatch(incrementBy(2))}> +2 </button>
        </div>
      </div>
    </>
  )
}

export default App
