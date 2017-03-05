import React, {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import CommentList from '../CommentList'
import Loader from '../Loader'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle, loadArticle} from '../../AC'
import {articleSelectorFactory} from '../../selectors'
import T from '../translate'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }),
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }
*/

    componentDidMount() {
        const { article, id, loadArticle } = this.props
        if (!article || (!article.isLoading && !article.isLoaded)) loadArticle(id)
    }

    render() {
        const {article, toggleOpen} = this.props
        if (!article) return null
        return (
            <div ref = {this.getContainerRef}>
                <h3 onClick={toggleOpen}>
                    {article.title}
                    <a href="#" onClick = {this.handleDelete}><T>Delete me</T></a>
                </h3>
                <CSSTransition
                    transitionName="article-body"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getContainerRef = (ref) => {
        this.container = ref
    }

    getCommentsRef = (ref) => {
        this.commentList = ref
        if (!ref) return null
//        console.log('---', ref.state.isOpen, findDOMNode(ref))
    }

    getBody() {
        const {isOpen, article} = this.props
        if (!isOpen) return null
        if (!article.isLoaded) return <Loader />

        return (
            <section>
                {article.text}
                <CommentList article={article} ref = {this.getCommentsRef} />
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }
}

export default connect((state, props) => {
    return {
        article: state.articles.entities.get(props.id),
        ln: props.ln
    }
}, { deleteArticle, loadArticle })(Article)
