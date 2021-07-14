import { tsConstructorType } from '@babel/types'
import React, { component } from 'react'

class Functionclick extends Component{
    constructor(props){
    super(props)

    this.state ={
        firstName:"",
        lastName:"",
        password:"",
        gender:"",
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler = (event) => {this.setstate({firstName: event.target.value
    })
}
lasthandler = (event) => {this.setstate({lastName: event.target.value
})
}
passwordhandler = (event) =>  {this.setstate({password: event.target.value
})
}
genderhandler = (event) => {this.setstate({gender: event.target.value
})
}

handleSubmit = (event) =>{
    alert('  ${this.state.firstName} ${this.state.lastName} Registeres successfully  ')
    console.log(this.state);
    this.setstate({
        firstName:"",
        lastName:"",
        password:"",
        gender:"",
    })
    event.preventDefault()
}
render(){
    return(
        <div>
            <form onSubmit={this.handlesubmit}>
                <h1>User Registration form</h1>
                <lable>Firstname:</lable> <input type="text" value={this.state.firstName} onChange={this.firstName}></input>
                <lable>Lastname:</lable> <input type="text" value={this.state.lastName} onChange={this.larstName}></input>
                <lable>Password:</lable> <input type="text" value={this.state.password} onChange={this.pasword}></input>
                <lable>Gender:</lable> <select onchange={this,genderhandler} defaultValue="Select Gender">
                    <option defaultValue>select gender</option>
                    <option value="male">male</option>
                    <option value="female">female</option><br/>
                    <input type="submit" value="submit" />
                </select>
            </form>
        </div>

    )
}
    
}
    
export default FunctionClick;