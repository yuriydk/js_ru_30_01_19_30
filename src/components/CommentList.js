import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import {loadArticleComments} from '../AC'
import {connect} from 'react-redux'
import T from './translate'


class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    }

    static contextTypes = {
        router: PropTypes.object,
        store: PropTypes.object,
        user: PropTypes.string
    }

    state = {
        isOpen: false
    }

    componentWillUpdate({article, loadArticleComments}, {isOpen}) {
        if (isOpen && !this.state.isOpen && !article.commentsLoaded && !article.commentsLoading) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const actionText = this.state.isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}><T>{actionText}</T></a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        const {commentsLoaded, comments = [], id} = this.props.article

        if (!commentsLoaded) {
            return <Loader />
        }

        if (!comments.length) return (<div>
            <h3><T>No comments yet</T></h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <div>
            <T>Username</T>: {this.context.user}
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={id} />
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect(null, {loadArticleComments})(CommentList)
