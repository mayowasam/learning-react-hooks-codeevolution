import React,{useReducer} from 'react'

const initialState={
    firstCounter:0,
    secondCounter:10
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'increase':
            return {...state,
                firstCounter:state.firstCounter + action.value
            }
        
        case 'decrease' :
            return {...state,
                firstCounter:state.firstCounter - action.value
            }


        case 'increaseSecond':
            return {...state,
                secondCounter:state.secondCounter + action.value
            }
        
        case 'decreaseSecond' :
            return {...state,
                secondCounter:state.secondCounter - action.value
            }
        
        case 'reset':
            return initialState
        
        default :
            return state
        


    }
}

function CounterTwo() {

    const[count,dispatch] =useReducer(reducer,initialState)
    return (
        <div>
           <h1>{count.firstCounter}</h1> 
           <h1>{count.secondCounter}</h1> 
            <button onClick={()=>dispatch({type:'increase',value:1})}>increase</button>
            <button onClick={()=>dispatch({type:'decrease',value:1})}>reduce</button>

            <button onClick={()=>dispatch({type:'increase', value:5})}>increase by 5</button>
            <button onClick={()=>dispatch({type:'decrease', value:5})}>reduce by 5</button>

<br/><br/><br/><br/><br/>

            <button onClick={()=>dispatch({type:'increaseSecond',value:1})}>second increase</button>
            <button onClick={()=>dispatch({type:'decreaseSecond',value:1})}>second reduce</button>

            <button onClick={()=>dispatch({type:'increaseSecond', value:5})}>second increase by 5</button>
            <button onClick={()=>dispatch({type:'decreaseSecond', value:5})}>second reduce by 5</button>

            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo

