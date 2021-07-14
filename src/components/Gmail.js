import React from 'react';

class Gmail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonName: "Gmail"
        }

    }
    render() {
        return (<div>
            <a href="//https:www.gmail.com">{this.state.buttonName}</a> &nbsp;&nbsp;
            <a href="//https:www.googleimages.com">images</a>
        </div>)
    }
}

export default Gmail