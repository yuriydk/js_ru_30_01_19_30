import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    article = this.props.article

    state = {
        isOpen: false
    }

    render() {
        return (
            <div>
                <h3 onClick={ev => this.handleClick(ev)}>{this.article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen)
            return null

        return (
            <section>
                {this.article.text}
                <CommentList comments={this.article.comments}/>
            </section>
        )
    }

    handleClick(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
