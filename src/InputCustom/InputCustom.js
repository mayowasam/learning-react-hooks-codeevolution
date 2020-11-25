import React,{useState} from 'react'



function InputCustom() {
    const [name, setName] = useState({firstName:"",lastName:""})

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(`${name.firstName} ${name.lastName}`)
        setName({firstName:"",lastName:""})
    
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>firstName: </label>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })} />
                <br /> <br />

                <label>lastname:</label>
                <input
                    type="text"
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })} />
                <br /> <br />

                <button> submit</button>
            </form>

            <h1>{name.firstName}</h1>
            <h1>{name.lastName}</h1>

        </div>
    )
}

export default InputCustom
