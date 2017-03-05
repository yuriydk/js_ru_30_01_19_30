import React, { Component, PropTypes } from 'react'
import Link from '../link'

class MenuItem extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        const {path, title} = this.props
        return (
            <div>
                <Link to={path} activeStyle={{color: 'red'}}>{title}</Link>
            </div>
        )
    }
}

export default MenuItem
