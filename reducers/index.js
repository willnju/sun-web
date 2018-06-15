import {combineReducers} from 'redux';
import {admin, articleEdit, articles,  homeBanner} from './home';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    homeBanner:homeBanner,
    admin:admin,
    form:formReducer,
    articleEdit:articleEdit,
    article:articles,
});

export default todoApp;