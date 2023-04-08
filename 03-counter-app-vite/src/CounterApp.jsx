import { useState } from 'react'

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleReset = () => {
        setCounter(value);
    }

    const handleSub = () => {
        setCounter(counter - 1);
    }

    return (
        <>
            <h1> CounterApp </h1>
            <h2>{counter}</h2>
            <div className="butt">
                <button onClick={handleSub}> -1 </button>
                <button aria-label="btn-reset"  onClick={handleReset}> Reset </button>
                <button onClick={handleAdd}> +1 </button>
            </div>
        </>
    )


}