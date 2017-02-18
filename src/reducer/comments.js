import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {ADD_COMMENT, START, SUCCESS, LOAD_ALL_COMMENTS } from '../constants'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            return {...state, entities: {...state.entities, [payload.comment.id]: payload.comment}}

        case LOAD_ALL_COMMENTS + START:
            return {...state, isLoading: true}

            case LOAD_ALL_COMMENTS + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response.records),
                isLoading: false
            }
    }

    return state
}
