import React from 'react'
import {Router, Route, hashHistory, browserHistory} from 'react-router'
import Root from './components/Root'
import ArticleList from './routeHandlers/ArticleList'
import Filters from './routeHandlers/Filters'
import Counter from './routeHandlers/Counter'
import ArticlePage from './routeHandlers/ArticlePage'
import NotFoundPage from './routeHandlers/NotFoundPage'
import AuthorizedOnlyPage from './routeHandlers/AuthorizedOnlyPage'
import ErrorPage from './routeHandlers/ErrorPage'
import store from './store'
import CommentsPage  from '././components/CommentsPage'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <Route path="articles" component={ArticleList}>
                <Route path=":id" component={ArticlePage} />
            </Route>
            <Route path="filters" component={Filters}/>
            <Route path="counter" component={Counter}/>
            <Route path="comments/:pageNumber" component={CommentsPage} />
            <Route path="admin" component={AuthorizedOnlyPage}
                onEnter={(routeState, replace) => {
                    if (!store.getState().user) {
                        replace('/error')
                    }
                    }
                }
            />
            <Route path="error" component={ErrorPage} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
)
