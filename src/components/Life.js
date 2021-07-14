import React from 'react'

class Life extends React.Component{
    constructor()
{
super();
this.state={name:'mohit',
            age:23
        }
}
componentDigmount()
{
    console.warn("did mount");
}
render()
{
    return(
    <div>
        <h1>lifecycle</h1>
        <h2> {this.state.name} </h2>
        <h2> {this.state.age} </h2>
        <h1 style={{color: "#00ff00"}}>Google</h1>
    </div> )
  }
}
export default Life;