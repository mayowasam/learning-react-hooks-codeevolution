import React,{useReducer,useEffect} from 'react'
import axios from 'axios'


const initialState= {
    loading:true,
    error : '',
    post:[]
}

const reducer = (state,action)=>{
    switch(action.type){
        case 'fetch_success':
            return{
                loading:false,
                error:"",
                post:action.payload
            }
        case 'fetch_failure':
            return{
                loading:false,
                error:action.payload,
                post:[]
            }
        default:
            return state
    }
}
function DataFetchingUseReducer() {

    const [state,dispatch]=useReducer(reducer,initialState)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            dispatch({type:'fetch_success', payload:res.data})
        })
        .catch(err=>{
            dispatch({type:'fetch_failure',payload:err.message})
        })
        
    }, [])

    console.log(state.post.map(posts=>posts.id))
    return (
       
        <div>
            <ul>
                {state.post.map(pos=>
                <li key={pos.id}>{pos.title}</li>
                    )}

                
            </ul>
            {state.error}

            {/* {state.post.title}
            {state.error} */}
        </div>
    )
}

export default DataFetchingUseReducer
