import React from 'react'
import useLogic from './useLogic'

function ButtonStyle() {
    const [_styles, handleClick]= useLogic()
    
    return (
        <div>
        <button style={_styles} onClick={handleClick}>change styles</button>  
        </div>
    )
}

export default ButtonStyle





   









