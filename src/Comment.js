import React, {Component} from 'react'

export default class Comment extends Component {
    render() {
        const {comment} = this.props;
        return (
            <p>
                <strong>{comment.user}</strong>:
                <i>{comment.text}</i>
            </p>
        )
    }
}
