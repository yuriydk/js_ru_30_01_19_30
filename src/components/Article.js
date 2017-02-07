import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'

function Article(props) {
    const getBody = () => {
            const {isOpen, article: {text, comments}} = this.props
            if (!isOpen) return null

            return (
                <section>
                    {text}
                    <CommentList comments={comments}/>
                </section>
            )
        }

    const {article, toggleOpen} = this.props
    return (
        <div>
            <h3 onClick={toggleOpen}>{article.title}</h3>
            {this.getBody()}
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    }).isRequired
}

export default Article
