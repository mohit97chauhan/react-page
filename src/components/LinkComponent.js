import React from 'react'


class LinkComponent extends React.Component {
    render() {
        const {
            link,
            url,
        } = this.props
        return (
            <span
                style={{
                    padding: 10,
                }}
            >
                <a href={url} target="_blank" >{link}</a>
            </span>
        )
    }
}

export default LinkComponent