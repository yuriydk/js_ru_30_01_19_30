import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string
    };

    render() {
        const {path, title} = this.props
        return (
            <div>
                <Link to={path}>{title || path}</Link>
            </div>
        )
    }
}

export default MenuItem
