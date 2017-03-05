import {SET_CURRENT_PATH} from '../constants'

export default (state = '', action) => {
    switch (action.type) {
        case SET_CURRENT_PATH:
            return action.payload.pathname
    }

    return state
}
