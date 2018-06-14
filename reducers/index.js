import {combineReducers} from 'redux';
import {admin, homeBanner} from './home';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    homeBanner:homeBanner,
    admin:admin,
    form:formReducer,
});

export default todoApp;