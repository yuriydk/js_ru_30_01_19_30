import React, {Component, PropTypes} from 'react'
import CommentList from './CommentList'

function Article(props) {
    const getBody = () => {
            const {isOpen, article: {text, comments}} = props
            if (!isOpen) return null

            return (
                <section>
                    {text}
                    <CommentList comments={comments}/>
                </section>
            )
        }

    const {article, toggleOpen} = props
    return (
        <div>
            <h3 onClick={toggleOpen}>{article.title}</h3>
            {getBody()}
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
