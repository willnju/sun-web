import {combineReducers} from 'redux';
import {searchResult,source,detail,tree,existTree} from './search';

const todoApp = combineReducers({
    source:source,
    searchResult:searchResult,
    detail:detail,
    tree:tree,
    existTree:existTree,
});

export default todoApp;