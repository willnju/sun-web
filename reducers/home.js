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
                users_page:action.users_page,
            };
        case ADD_USER_MODAL:
            return {
                ...state,
                users_add_modal: action.users_add_modal,
                user: action.user,
                users_page:action.users_page,
            };
        case UPDATE_USER_MODAL:
            return {
                ...state,
                users_update_modal: action.users_update_modal,
                user: action.user,
                users_page:action.users_page,
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

export function articleEdit(state = {}, action) {
    switch (action.type) {
        case ARTICLE_HTML_CONTENT:
            return {
                ...state,
                htmlContent: action.htmlContent
            };
        case ARTICLE_TAGS:
            return {
                ...state,
                tags:action.tags? action.tags:[]
            };
        case ARTICLE_RESPONSE_LIST:
            return {
                ...state,
                responseList: action.responseList
            };
        case CHANNELS:
            return {
                ...state,
                channels: action.channels
            };
            case COLUMNS:
        return {
            ...state,
            columns: action.columns
        };
        default:
            return state;
    }
}
export function articles(state = {}, action) {
    switch (action.type) {
        case SHOWARTICLES:
            return {
                ...state,
                articles: action.articles,
                articles_page:action.articles_page,
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
const ARTICLE_TAGS = "article_tags";
const ARTICLE_RESPONSE_LIST = "article_response_list";

const CHANNELS = "channel";
const COLUMNS = "columns";

const SHOWARTICLES = 'show_articles'

export const SHOW_USERS = (users,page) => ({type: SHOWUER, users: users,users_page:page});
export const SHOW_USERS_ADD_MODAL = (status) => ({type: ADD_USER_MODAL, users_add_modal: status})
export const SHOW_USERS_UPDATE_MODAL = (status, user,page) => ({
    type: UPDATE_USER_MODAL,
    users_update_modal: status,
    user: user,
    users_page:page
})
export const USER_INFO = (user) => ({type: USER, user: user});

export const HTML_CONTENT = (content) => ({type: ARTICLE_HTML_CONTENT, htmlContent: content});
export const CHANGE_ARTICLE_TAGS = (content) => ({type: ARTICLE_TAGS, tags: content});
export const RESPONSSE_LIST = (content) => ({type: ARTICLE_RESPONSE_LIST, responseList: content});

export const SHOW_ARTICLES = (artilces,page) => ({type: SHOWARTICLES, articles: artilces,artilces_page:page});

export const CHANGE_CHANNELS = (chs) => ({type: CHANNELS, channels: chs});
export const CHANGE_COLUMNS = (cos) => ({type: COLUMNS, columns: cos});
