import React from 'react'
import useCounter from './useCounterLogic'

function CounterCustomTwo() {
    const [counter,increment,decrement,reset]= useCounter(10,5)
    return (
        <div>
             {counter}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterCustomTwo
