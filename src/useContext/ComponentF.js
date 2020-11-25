import React from 'react'
import {UserContext, ChannetContext} from '../App'


function ComponentF() {
    return (
        <div>
           <UserContext.Consumer>
               {user =>{
                   return(
                       <ChannetContext.Consumer>
                           {channel =>{
                               return(
                               <div>{user} {channel}</div>
                                )
                           }}
                       </ChannetContext.Consumer>
                   )
               }
               }
           </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
