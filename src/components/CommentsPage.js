import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import Loader from './Loader'
import {loadCommentsPage} from '../AC'
import {connect} from 'react-redux'
import {mapToArr} from '../utils'
import {COMMENTS_PAGE_SIZE} from '../constants'
import SimplePager from './SimplePager'
import NotFoundPage from '../routeHandlers/NotFoundPage'

class CommentsPage extends Component {

    static propTypes = {
        params: PropTypes.shape({pageNumber: PropTypes.string.isRequired}).isRequired
    }

    load ({isLoadingReuqired, loadCommentsPage, params: {pageNumber}}) {
        if(isLoadingReuqired)
            loadCommentsPage(pageNumber)
    }

    componentDidMount(){
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.load(nextProps)
    }

    render () {
        const {comments, isLoading, params: {pageNumber}, total} = this.props
        if(isLoading)
            return <Loader/>

        if(!comments.length)
            return <NotFoundPage />

        const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)

        return(
            <div>
                <SimplePager current={+pageNumber} count={Math.ceil(total/COMMENTS_PAGE_SIZE)} path="/comments"/>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }
}

export default connect((state, props) => {
    const {pageNumber} = props.params;
    const page = state.commentsPages.entities.get(pageNumber)

    if(!page)
        return {isLoadingReuqired: true, isLoading: true}

    const {comments, isLoading, isLoaded} = page
    const isLoadingReuqired = !isLoading && !isLoaded
    return {
        comments: comments,
        total: state.comments.total,
        isLoadingReuqired: isLoadingReuqired,
        isLoading: isLoading
    }
}, {loadCommentsPage})(CommentsPage)
