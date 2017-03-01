import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

const SimplePager = (props) => {
    const {pageNumber, path} = props
    const prev = pageNumber > 1 ? <Link to={`${path}/${+pageNumber - 1}`}>prev</Link> : null
    return (
        <div>
            {prev} <Link to={`${path}/${+pageNumber + 1}`}>next</Link>
        </div>
    )
}

export default SimplePager
