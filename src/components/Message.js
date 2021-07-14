import React from 'react';
  
class Message extends React.Component{
    constructor() { 
        super()
        this.state={
            message: 'welcome visitor'
        }
    }
    changemessage() {
        this.setState({
            message: 'thanku for subscribing'
        })
    }
    render(){
        return(
            <div> <h1>{this.state.message}</h1> 
            <button onClick={()=> this.ChangeMessage()}>subscribe</button>
            </div>
        )
    }
}
export default Message;