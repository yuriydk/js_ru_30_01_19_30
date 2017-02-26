import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {loadCommentsForArticle} from '../AC'
import {connect} from 'react-redux'
import Loader from './Loader'


class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        loadCommentsForArticle: PropTypes.func.isRequired
    }

    state = {
        isOpen: false
    }

    componentWillUpdate({ article, loadArticle, loadCommentsForArticle}, {isOpen}) {
        if (!this.state.isOpen && isOpen && !article.isCommentsLoading && !article.isCommentsLoaded) loadCommentsForArticle(article.id)
    }

    render() {
        const actionText = this.state.isOpen ? 'hide' : 'show'
        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{actionText} comments</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null

        if(!this.props.article.isCommentsLoaded)
            return <Loader/>

        const {comments = [], id} = this.props.article
        if (!comments.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={id}/>
        </div>)

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <div>
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

export default connect(null, {loadCommentsForArticle})(CommentList)
