import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter'
import './App.css'

function App() {
  const { counter } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>- </button>
        <p>{counter}</p>
        <button onClick={() => dispatch(increment())}>+ </button>
        <p></p>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </>
  )
}

export default App
