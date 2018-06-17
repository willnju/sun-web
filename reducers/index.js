import {combineReducers} from 'redux';
import {admin, articleEdit, articles, homeBanner, personal} from './home';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    homeBanner:homeBanner,
    admin:admin,
    form:formReducer,
    articleEdit:articleEdit,
    personal:personal,
});

export default todoApp;