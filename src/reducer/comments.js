import {ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record, Map} from 'immutable'


const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = new Map({})


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId})

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return state.merge(arrayToMap(response, CommentModel))
    }

    return state
}
