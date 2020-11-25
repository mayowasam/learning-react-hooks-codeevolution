import React, { Component } from 'react'

export class ClassFocus extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            age:""
        }
    }
handleChange=(e)=>{
    const {name,value}= e.target
    this.setState({
       [name]:value
        
    })

}
dispatch =() =>{
  
        console.log(this.firstName);
        console.log(this.firstName.value)
       

}


whenKeyIsUp= (target,e)=>{
    if(e.keyCode === 13){
        switch(target){
            case 'firstName':
                this.lastName.focus()
                break;
            case 'lastName':
                this.age.focus()
                break; 
            default:
                this.firstName.focus() 

        

        } 

    }
}

    render() {
        console.log(this.state.firstName)

        return (
            <div>
                <h1>firstname</h1>
                <input
                    ref={(input) => { this.firstName = input }}
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    onKeyUp={this.whenKeyIsUp.bind(this,this.firstName)}
                />
                <button onClick={this.dispatch}>dispatch</button><br />


                <h1>lastname</h1>
                <input
                    ref={(input) => { this.lastName = input }}
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    onKeyUp={this.whenKeyIsUp.bind(this,this.lastName)}

                   

                /><br />



                <h1>age</h1>
                <input
                    ref={(input) => { this.age = input }}
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    onKeyUp={this.whenKeyIsUp.bind(this,this.age)}

                  

                />

                <h1>{this.state.firstName}</h1>
                <h1>{this.state.lastName}</h1>
                <h1>{this.state.age}</h1>


            </div>
        )
    }
}

export default ClassFocus
