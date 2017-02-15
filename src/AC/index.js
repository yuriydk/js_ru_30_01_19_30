import constants from '../constants'

export function increment() {
    const action = {
        type: constants.INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: constants.DELETE_ARTICLE,
        payload: { id }
    }
}

export function filterByIds(ids){
    return {
        type: constants.FILTER_BY_ID,
        payload: { ids }
    }
}

export function filterByDate(range){
    return {
        type: constants.FILTER_BY_DATE,
        payload: { range }
    }
}
