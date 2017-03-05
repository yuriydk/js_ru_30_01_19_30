import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'
import T from '../components/translate'

class CommentRoot extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1><T>Comments pagination</T></h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot
