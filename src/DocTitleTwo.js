import React, {useState} from 'react'
import useDocTitle from './hooks/useDocTitle'


function DocTitleTwo() {
    const[count, setCounter]= useState(0)
   

   useDocTitle(count)
    return (
        <div>
            {count}
            <button onClick={()=>setCounter(count +1)}>set count</button>
        </div>
    )
}

export default DocTitleTwo
