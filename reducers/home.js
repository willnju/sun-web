export function homeBanner(state = {}, action) {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

export function admin(state = {}, action) {
    switch (action.type) {
        case SHOWUER:
            return {
                ...state,
                users: action.users,
            };
        case ADD_USER_MODAL:
            return {
                ...state,
                users_add_modal: action.users_add_modal
            };
        case UPDATE_USER_MODAL:
            return {
                ...state,
                users_update_modal: action.users_update_modal,
                user: action.user,
            };
        case USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}

export function article(state = {}, action) {
    switch (action.type) {
        case ARTICLE_HTML_CONTENT:
            return {
                ...state,
                htmlContent: action.htmlContent
            };
        case ARTICLE_MARKDOWN:
            return {
                ...state,
                markdownContent: action.markdownContent
            };
        case ARTICLE_RESPONSE_LIST:
            return {
                ...state,
                responseList: action.responseList
            };
        default:
            return state;
    }
}

const SHOWUER = 'showusers'
const ADD_USER_MODAL = 'add_user_modal'
const UPDATE_USER_MODAL = 'update_user_modal'
const USER = 'user'

const ARTICLE_HTML_CONTENT = "article_html_content"
const ARTICLE_MARKDOWN = "article_markdown";
const ARTICLE_RESPONSE_LIST = "article_response_list";

export const SHOW_USERS = (users) => ({type: SHOWUER, users: users});
export const SHOW_USERS_ADD_MODAL = (status) => ({type: ADD_USER_MODAL, users_add_modal: status})
export const SHOW_USERS_UPDATE_MODAL = (status, data) => ({
    type: UPDATE_USER_MODAL,
    users_update_modal: status,
    user: data
})
export const USER_INFO = (user) => ({type: USER, user: user});

export const HTML_CONTENT = (content) => ({type: ARTICLE_HTML_CONTENT, htmlContent: content});
export const MARKDOWN = (content) => ({type: ARTICLE_MARKDOWN, markdownContent: content});
export const RESPONSSE_LIST = (content) => ({type: ARTICLE_RESPONSE_LIST, responseList: content});

