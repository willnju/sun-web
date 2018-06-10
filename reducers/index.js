import {combineReducers} from 'redux';
import {homeBanner} from './home';

const todoApp = combineReducers({
    homeBanner:homeBanner,
});

export default todoApp;