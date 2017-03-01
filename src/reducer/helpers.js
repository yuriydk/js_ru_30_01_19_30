import {Record, Map} from 'immutable'

export const DefaultReducerState = Record({
    total: -1,
    isLoading: false,
    entities: new Map({})
})
