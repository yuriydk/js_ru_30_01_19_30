import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE_RANGE, CHANGE_SELECTION, LOAD_ALL_ARTICLES, ADD_COMMENT, LOAD_ARTICLE,
    START, SUCCESS, FAIL, LOAD_COMMENTS_FOR_ARTICLE} from '../constants'
import $ from 'jquery'


export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: { dateRange }
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: { selected }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadAllArticlesThunk() {
    return (dispatch) => {
        dispatch({
            type: LOAD_ALL_ARTICLES + START
        })

        setTimeout(() => {
            $.get('/api/article')
                .done(response => dispatch({
                    type: LOAD_ALL_ARTICLES + SUCCESS,
                    response
                }))
                .fail(error => dispatch({
                    type: LOAD_ALL_ARTICLES + FAIL,
                    error
                }))
        }, 1000)
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: { comment, articleId },
        generateId: true
    }
}

export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        payload: { id },
        callAPI: `/api/article/${id}`
    }
}

export function loadCommentsForArticle(articleId){
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: {articleId},
        callAPI: `/api/comment?article=${articleId}`
    }
}
