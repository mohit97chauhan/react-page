import React from 'react';


class RedButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonName: "Click Me!"
        }

    }

    render() {

        return (

            <button style={{color: "red", padding: 20}} type="button">{this.state.buttonName}</button>
        )
    }
}

export default RedButton