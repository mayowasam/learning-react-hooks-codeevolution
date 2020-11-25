import React,{useReducer} from 'react'

const initialState=0
const reducer = (state,action)=>{
    switch(action){
        case 'increase':
            return state + 1
        
        case 'decrease' :
            return state - 1
        
        case 'reset':
            return initialState
        
        default :
            return state
        


    }
}

function CounterOne() {

    const[count,dispatch] =useReducer(reducer,initialState)

    return (
        <div>
           <h1>{count}</h1> 
            <button onClick={()=>dispatch('increase')}>increase</button>
            <button onClick={()=>dispatch('decrease')}>reduce</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

          
        </div>
    )
}

export default CounterOne
