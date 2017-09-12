/**
 * Created by will on 17/8/15.
 */
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import $ from 'jquery';
// import { syncHistoryWithStore } from 'react-router-redux';

import store from '../store/index';
import Search from '../containers/Search';
import SearchResult from '../containers/SearchResult';
import PaperDetail from '../containers/PaperDetail';
import TreeMap from '../containers/TreeMap';
// const history = syncHistoryWithStore(hashHistory, store);
// history.listen(() => {});

let onEnter = () => {
    $('body').animate({ scrollTop: 0 });
};

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Search} />
            <Route path='/search/:linkId/:sourceId/:searchType' component={SearchResult} />
            <Route path='/detail/:linkId' component={PaperDetail} />
            <Route path='/tree/:keyWord' component={TreeMap} />
        </Router>
    </Provider>
)

export default router;