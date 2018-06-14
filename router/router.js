/**
 * Created by will on 18/6/5.
 */
import React from 'react';
import {hashHistory, IndexRoute, Route, Router} from 'react-router';
import {Provider} from 'react-redux';
import $ from 'jquery';

import store from '../store/index';
import MainPage from '../containers';
import HomePage from '../containers/homePage/index';
import Admin from '../containers/admin/index';
import UserContainer from "../containers/admin/UserContainer";
import Layout from "../component/admin/Layout";
import ArticleEditContainer from "../containers/admin/ArticleContainer";

let onEnter = () => {
    $('body').animate({ scrollTop: 0 });
};

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' components={MainPage}>
                <IndexRoute component={HomePage}/>
                <Route path='/home' components={HomePage}/>
            </Route>
            <Route path='/admin' components={Admin}/>
            <Route path='/layout' components={Layout}/>
            <Route path='/user' components={UserContainer}/>
            <Route path='/article' components={ArticleEditContainer}/>
        </Router>
    </Provider>
)

export default router;