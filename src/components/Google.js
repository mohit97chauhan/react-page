import React from 'react'

class Google extends React.Component {
    render() {
        return ( 
         <div style={{"text-align": "center"}}>   
            <lable> search </lable>
            <input style={{height: "30px", width: "450px", "border-radius": 50}} type='text'/>
        </div>

        )
    }
}

export default Google