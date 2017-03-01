import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

const SimplePager = (props) => {
    const {current, path, count} = props
    console.log(props);
    const links  = [];
    for (let i = 0; i < count; i++) {
        links.push(i + 1 != current ? <Link key={i} to={`${path}/${i + 1}`}>{i + 1}</Link> : <b key={i} >{i + 1}</b>)
    }
    console.log(links);
    return (
        <div>
            {links}
        </div>
    )
}

export default SimplePager
