import {combineReducers} from 'redux';
import {homeBanner} from './home';
import { reducer as formReducer } from 'redux-form';

const todoApp = combineReducers({
    homeBanner:homeBanner,
    form:formReducer,
});

export default todoApp;