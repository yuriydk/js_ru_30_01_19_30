import React, { PropTypes, Component } from 'react'
import DateRangePicker from './DateRangePicker'
import ArticleList from './ArticleList'


class App extends Component {

    onDateRangeSelected = (range) => {
        console.log(range);
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))


        return (
            <div>
                <DateRangePicker onRangeSelected={this.onDateRangeSelected}/>
                <ArticleList articles={articles}/>
            </div>
        )
    }
}

App.propTypes = {
    articles: PropTypes.array.isRequired
}

export default App
