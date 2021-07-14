import React, { Component } from 'react'

class GoogleText extends React.Component {
    render() {
        const {
            color,
            letter,
        } = this.props
        return (
            <span
                style={{
                    color: color,
                }}
            >
                {letter}
            </span>
        )
    }
}

export default GoogleText