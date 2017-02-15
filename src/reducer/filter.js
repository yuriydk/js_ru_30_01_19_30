import constants from '../constants'

export default (filter = {ids: [], range:{from:null, to: null}}, action) => {
    const {type, payload} = action
    const {ids, range} = filter
    switch (type) {
        case constants.FILTER_BY_DATE:
            return {ids: ids, range: action.payload.range}

        case constants.FILTER_BY_ID:
            return {ids: action.payload.ids, range: range}
    }

    return filter
}
