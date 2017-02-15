import React, { PropTypes, Component } from 'react'
import ArticleList from './ArticleList'
import DateRange from './FilterByDateRange'
import FilterByArticleIds from './FilterByArticleIds'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        filter: PropTypes.shape({
            ids: PropTypes.array.isRequired,
            range: PropTypes.shape({from: PropTypes.date, to: PropTypes.date}).isRequired
        }).isRequired

    }

    render() {
        const {articles} = this.props
        return (
            <div>
                <Counter/>
                <FilterByArticleIds/>
                <DateRange />
                <ArticleList articles={this.applyFilter(articles)}/>
            </div>
        )
    }

    applyFilter = (articles) => {
        return articles.filter(a => this.applyFilterByArticleIds(a) && this.applyFilterByRange(a))
    }

    applyFilterByArticleIds = article => {
        const {ids} = this.props.filter
        return !ids.length || this.props.filter.ids.some(id => article.id == id)
    }

    applyFilterByRange = article => {
        //compare dates without time
        const compareDates = (less, greater) => {
            return !(less && greater) || new Date(less.toDateString()) <= new Date(greater.toDateString())
        }
        const {range} = this.props.filter
        return compareDates(range.from, article.date) && compareDates(article.date, range.to)
    }
}

export default connect(state => ({
    articles: state.articles,
    filter: state.filter
}))(App)
