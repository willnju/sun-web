import {combineReducers} from 'redux';
import {admin, article, homeBanner} from './home';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    homeBanner:homeBanner,
    admin:admin,
    form:formReducer,
    article:article,
});

export default todoApp;