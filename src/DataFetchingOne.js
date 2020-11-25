import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {    
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPost] = useState({})


useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>{
        setLoading(false)
        setPost(res.data)
        console.log(posts)
       setError('') 

    })
    .catch(err=>{
        setLoading(false)
        setPost({})
        setError(err.message)
    }
       )
    
}, [])

    return (
        <div>
            {/* <ul>
                {loading?<h1>i am still loading</h1> :posts.map(post=><li key={post.id}>{post.title}</li>)}
                
            </ul>
            {error? error:null} */}
            {loading?<h1>i am still loading</h1> : posts.title}
            {error? error:null}
        </div>
    )
}

export default DataFetchingOne
