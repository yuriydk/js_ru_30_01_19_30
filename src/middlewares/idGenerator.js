import {COMMENT_ENTITY_NAME} from '../constants'

export default store => next => action => {
    if(!action.entityName || !action.payload[action.entityName] || action.payload[action.entityName].id !== null)
        return next(action);

    if(action.entityName == COMMENT_ENTITY_NAME)
    {
        const {payload: {...newPayload}, ...newAction}  = action
        const {...comment} = newPayload[action.entityName]
        // const {...newPayload} = payload
        const {comments} = store.getState()
        comment.id = Math.max(...Object.keys(comments)) + 1
        newPayload[action.entityName] = comment
        newAction.payload = newPayload
        return next(newAction)
    }

    return next(action);
}
