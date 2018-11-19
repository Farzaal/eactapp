import * as Constants from '../actions/Constants'

const initState = {
    articles : [
        {'id' : 1, 'title' : 'one', 'body' : 'aik'},
        {'id' : 2, 'title' : 'two', 'body' : 'do'},
        {'id' : 3, 'title' : 'three', 'body' : 'teen'}
    ],
    posts : []
}

const rootReducer = (state = initState, action) => {

    if(action.type === Constants.ADD_ARTICLE) {
        const art = action.article;
        return {
            ...state,
            articles : [...state.articles, art]
        }
    }

    if(action.type === Constants.REMOVE_ARTICLE) {
        return {
            ...state,
            articles : [...state.articles.filter(article => article.id !== action.id)]
        } 
    }

    if(action.type === Constants.ADD_POST) {

        const post = action.post;
        return {
            ...state,
            posts : [...state.posts, post]
        } 
    }

    if(action.type === Constants.REMOVE_POST) {
        console.log(action);
    }

    return state;
}

export default rootReducer;