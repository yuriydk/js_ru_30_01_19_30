import React, {Component, PropTypes} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

function ArticleList(props) {
    const {articles, toggleOpenItem} = props
    const openArticleId = props.openItemId;
    const articleElements = articles.map((article) => <li key={article.id}>
        <Article
            article={article}
            isOpen={article.id == openArticleId}
            toggleOpen={toggleOpenItem(article.id)}/>
    </li>)
    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    openItemId: React.PropTypes.string,
    toggleOpenItem: React.PropTypes.func.isRequired,
    articles: PropTypes.arrayOf( PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        comments: PropTypes.array
    })).isRequired
}

export default accordion(ArticleList)
