import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import Loader from './Loader'
import {loadCommentsPage} from '../AC'
import {connect} from 'react-redux'
import {mapToArr} from '../utils'
import {COMMENTS_PAGE_SIZE} from '../constants'

class CommentsPage extends Component {

    componentDidMount(){
        const {isLoadingReuqired, loadCommentsPage, params: {pageNumber}} = this.props;
        if(isLoadingReuqired)
            loadCommentsPage(pageNumber)
    }

    componentWillReceiveProps({isLoadingReuqired, loadCommentsPage, params: {pageNumber}}){
        if(isLoadingReuqired)
            loadCommentsPage(pageNumber)
    }

    render () {
        const {comments, isLoading} = this.props
        if(isLoading)
            return <Loader/>

        if(!comments.length)
            return <h3>No comments yet!</h3>

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)

        return(
            <div>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

export default connect((state, props)=>{
    debugger
    const allComments = mapToArr(state.commentsPages.entities);
    const {total, isLoading} = state.comments
    const {pageNumber} = props.params;
    const begin = (pageNumber - 1) * COMMENTS_PAGE_SIZE
    const comments = allComments.slice(begin, begin + COMMENTS_PAGE_SIZE)
    const isLoadingReuqired = total < 0  || !isLoading && total > begin && !comments.length
    return {
        comments: allComments.slice(begin, begin + COMMENTS_PAGE_SIZE),
        isLoadingReuqired: isLoadingReuqired
    }
}, {loadCommentsPage})(CommentsPage)
