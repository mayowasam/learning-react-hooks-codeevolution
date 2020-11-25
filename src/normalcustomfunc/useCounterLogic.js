import {useState} from 'react'

function useCounterLogic(initialCount= 0, value) {
    const [counter, setCounter] = useState(initialCount)

    const increment = () => {
        setCounter(prevCounter => prevCounter + value)
    }
    const decrement = () => {
        setCounter(prevCounter => prevCounter - value)
    }
    const reset = () => {
        setCounter(initialCount)
    }


    return [counter,increment,decrement,reset]
}

export default useCounterLogic
