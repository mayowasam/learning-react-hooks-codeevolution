import React from 'react'
import CounterCustomTwo from './CounterCustomTwo'
import useCounter from './useCounterLogic'

function CounterCustom() {
   const [counter,increment,decrement,reset]= useCounter(0, 1)
    return (
        <div>
            {counter}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>



            <CounterCustomTwo/>
        </div>
    )
}

export default CounterCustom
