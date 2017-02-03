import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: true
    }

    render() {
        if (!this.props.comments || !this.props.comments.length)
            return null

        return (
            <div>
                <button onClick={ev => this.handleClick(ev)}>{this.getToggleCommentsBtnText()}</button>
                {this.getComments()}
            </div>
        )
    }

    getToggleCommentsBtnText() {
        return this.state.isOpen
            ? 'hide comments'
            : 'show comments'
    }

    getComments(comments) {
        if (!this.state.isOpen)
            return null

        return this.props.comments.map(c => <Comment key={c.id} comment={c}/>)
    }

    handleClick(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
