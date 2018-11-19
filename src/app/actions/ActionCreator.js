import * as Constants  from './Constants';

export function addArticle(article) {
    return {
        type : Constants.ADD_ARTICLE,
        article
    };
}

export function removeArticle(id) {
    return {
        type : Constants.REMOVE_ARTICLE,
        id
    };
}

export function addPosts(post) {
    return {
        type : Constants.ADD_POST,
        post
    };
}

export function removePost(id) {
    return {
        type : Constants.REMOVE_POST,
        id
    };
}
