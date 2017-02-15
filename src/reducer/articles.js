import {articles as defaultArticles} from '../fixtures'
import constants from '../constants'

const makeDates = (articles) =>{
    articles.forEach(a => {a.date = new Date(a.date)})
    return articles
}

export default (articles = makeDates(defaultArticles), action) => {
    const {type, payload} = action

    switch (type) {
        case constants.DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
    }

    return articles
}
