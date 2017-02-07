import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const getBody = () => {
        if (!props.isOpen) return null

        const {comments} = props
        if (!comments.length) return <h3>No comments yet</h3>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
        return <ul>{commentItems}</ul>
    }

    const actionText = props.isOpen ? 'hide' : 'show'
    return (
        <div>
            <a href="#" onClick={props.toggleOpen}>{actionText} comments</a>
            {getBody()}
        </div>
    )
}

CommentList.defaultProps = {
    comments: []
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
}

export default toggleOpen(CommentList)
