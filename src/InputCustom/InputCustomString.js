import React from 'react'
import useCustomInput from './useCustomInput'


function InputCustomString() {
   
    const [firstName,bindFirstName, resetFirstName] =useCustomInput("")
    const [lastName,bindLastName, resetLastName] =useCustomInput("")


    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(`${firstName}  ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={submitHandler}> 

                <label>firstName</label>
                <input 
                type='text' 
                {...bindFirstName} />

                <label>lastName</label>
                <input 
                type='text' 
                {...bindLastName} />

                <button>submit</button>
            </form>

            <h1>{firstName}</h1>
            <h1>{lastName}</h1>

        </div>
    )
}

export default InputCustomString
