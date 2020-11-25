import React,{useState, useMemo} from 'react'

function CounterMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne =()=>{
        setCounterOne(counterOne+1)
    }

    const incrementTwo = ()=>{
        setCounterTwo(counterTwo +1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++

        return counterOne % 2 === 0

    }, [counterOne])


  
    return (
        <div>
            <h1>counterOne - {counterOne}</h1>
            <h1>counterTwo - {counterTwo} </h1>
            <span>{isEven ? 'is even' : 'is odd'}</span> <br/>
            <button onClick={incrementOne}>increment One</button>
            <button onClick={incrementTwo}>increment Two</button>
        </div>
    )
}

export default CounterMemo
