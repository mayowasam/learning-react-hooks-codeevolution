import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentF() {
    const exportedCountnDispatch = useContext(CountContext)
    return (
        <div>
            {exportedCountnDispatch.countState}
            <button onClick={()=>exportedCountnDispatch.countDispatch('increase')}>increase</button>
            <button onClick={()=>exportedCountnDispatch.countDispatch('decrease')}>decrease</button>
            <button onClick={()=>exportedCountnDispatch.countDispatch('reset')}>reset</button>

        </div>
    )
}

export default ComponentF

