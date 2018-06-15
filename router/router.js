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
import UserDetail from "../component/admin/user/UserDetail";
import ArticleEditContainer from "../containers/admin/ArticleEditContainer";
import Article from "../component/admin/article/Article";

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
            <Route path='/admin/user/:userNo' components={UserDetail}/>
            <Route path='/admin/article/edit' components={ArticleEditContainer}/>

            <Route path='/admin/layout' components={Layout}/>
            <Route path='/admin/user' components={UserContainer}/>
            <Route path='/admin/article' components={Article}/>
        </Router>
    </Provider>
)

export default router;