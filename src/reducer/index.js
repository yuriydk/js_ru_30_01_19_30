import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filters from './filters'
import comments from './comments'
import pathname from './pathname'

export default combineReducers({
    count: counterReducer,
    articles, filters, comments, pathname
})
