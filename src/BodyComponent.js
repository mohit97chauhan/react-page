import React, { Component } from 'react'
import Color from './components/Color'
import Google from './components/Google'
import CustomImage from './components/Image'

export default class BodyComponent extends Component {
    render() {
        return (
            <div
            >
                <CustomImage/>
                    <Color/> 
                    <Google/>   
            </div>
        )
    }
}
