import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import Loader from './Loader'
import {loadCommentsPage} from '../AC'
import {connect} from 'react-redux'
import {mapToArr} from '../utils'
import {COMMENTS_PAGE_SIZE} from '../constants'
import SimplePager from './SimplePager'

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
        const {comments, isLoading, params: {pageNumber}} = this.props
        if(isLoading)
            return <Loader/>

        if(!comments.length)
            return <h3>No comments for this page!</h3>

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)

        return(
            <div>
                <SimplePager pageNumber={pageNumber} path="/comments"/>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

export default connect((state, props)=>{
    const {pageNumber} = props.params;
    const page = state.commentsPages.entities.get(pageNumber)

    if(!page)
        return {isLoadingReuqired: true, isLoading: true}

    const {comments, isLoading, isLoaded} = page
    const isLoadingReuqired = !isLoading && !isLoaded
    return {
        comments: comments,
        isLoadingReuqired: isLoadingReuqired,
        isLoading: isLoading
    }
}, {loadCommentsPage})(CommentsPage)
