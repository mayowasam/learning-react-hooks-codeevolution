import React,{useContext} from 'react'
import {UserContext, ChannetContext} from '../App'


function ComponentC() {

    const user = useContext(UserContext)
    const channel = useContext(ChannetContext)
    return (
        <div>
           my name is {user} and i am learning {channel} tutorial
        </div>
    )
}

export default ComponentC
