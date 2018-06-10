/**
 * Created by will on 18/6/5.
 */
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import $ from 'jquery';

import store from '../store/index';
import HomePage from '../containers/homePage/index';
let onEnter = () => {
    $('body').animate({ scrollTop: 0 });
};

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <IndexRoute component={HomePage}/>
            <Route path='/home' components={HomePage}/>
        </Router>
    </Provider>
)

export default router;