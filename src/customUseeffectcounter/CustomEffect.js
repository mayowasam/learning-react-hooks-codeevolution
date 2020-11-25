import React,{useState} from 'react'
import uselogic from './useLogic'

function CustomCounter() {
    const [count, setCount] = useState(0)

    uselogic(count)
    return (
        <div>
            {count}
            <button onClick={()=>setCount(count +1)}> set count</button>
        </div>
    )
}

export default CustomCounter
