import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, START, LOAD_COMMENTS_PAGE} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record} from 'immutable'

const CommentsPageModel = Record({
    pageNumber: null,
    comments: [],
    isLoading: false,
    isLoaded: false
})

const defaultState = new DefaultReducerState()


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case LOAD_COMMENTS_PAGE + START:
            return state.setIn(['entities', payload.pageNumber], new CommentsPageModel({pageNumber: payload.pageNumber, isLoading: true}))
                        .setIn(['entities', payload.pageNumber, 'isLoading'], true)

            return state.setIn('isLoading', true)

        case LOAD_COMMENTS_PAGE + SUCCESS:
            return state.setIn(['entities', payload.pageNumber, 'isLoading'], false)
                        .setIn(['entities', payload.pageNumber, 'isLoaded'], true)
                        .setIn(['entities', payload.pageNumber, 'comments'], response.records.map(c=>c.id))
    }

    return state
}
