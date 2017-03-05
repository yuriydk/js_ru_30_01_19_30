import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../AC'
import T from './translate'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { articleId, addComment } = this.props
        addComment(this.state, articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <T>comment</T>: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                <T>user</T>: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, {addComment})(NewCommentForm)
