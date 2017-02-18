import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import api from '../middlewares/api'
import idGenerator from '../middlewares/idGenerator'
import thunk from 'redux-thunk'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk, api, logger, idGenerator)
)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store
