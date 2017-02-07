import React, {Component, PropTypes} from 'react'
import Article from './Article'

export default class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.arrayOf( PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        })).isRequired
    }
    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id == this.state.openArticleId}
                toggleOpen={this.toggleOpenArticle(article.id)}/>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = openArticleId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            openArticleId: this.state.openArticleId == openArticleId ? null: openArticleId
        })
    }
}


ArticleList.defaultProps = {
    articles: []
}
