import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import {loadAllComments} from '../AC'

class CommentList extends Component {
    static propTypes = {
        commentIds: PropTypes.arrayOf(PropTypes.number),
        articleId: PropTypes.string,
        isLoading: PropTypes.bool
    }
    static defaultProps = {
        commentIds: []
    }
    componentDidMount() {
        this.props.loadAllComments()
    }

    componentWillReceiveProps(nextProps) {
       // console.log('---', this.props, nextProps)
    }


    componentWillUnmount() {
        //console.log('---', 'unmounting')
    }

    state = {
        isOpen: false
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

        const {commentIds, articleId, isLoading} = this.props
        if (!commentIds.length) return (<div>
            <h3>No comments yet</h3>
            <NewCommentForm articleId={articleId} />
        </div>)

        if(isLoading)
            return (<h3>Loading...</h3>)

        const commentItems = commentIds.map(id => <li key={id}><Comment id={id} /></li>)
        return <div>
            <ul>{commentItems}</ul>
            <NewCommentForm articleId={articleId}/>
        </div>
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect(state=>({isLoading: state.comments.isLoading}), {loadAllComments})(CommentList)
