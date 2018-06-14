/**
 * Created by will on 18/6/5.
 */
import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import $ from 'jquery';

import store from '../store/index';
import HomePage from '../containers/homePage/index';
import Admin from '../containers/admin/index';
import UserContainer from "../containers/admin/UserContainer";
import Layout from "../component/admin/Layout";
import ArticleContainer from "../containers/admin/ArticleContainer";
let onEnter = () => {
    $('body').animate({ scrollTop: 0 });
};

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <IndexRoute component={HomePage}/>
            <Route path='/' components={HomePage}>
            </Route>
            <Route path='/admin' components={Admin}>
            </Route>
            <Route path='/layout' components={Layout}/>
            <Route path='/user' components={UserContainer}/>
            <Route path='/article' components={ArticleContainer}/>
        </Router>
    </Provider>
)

export default router;