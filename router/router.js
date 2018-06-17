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
import ArticleEditContainer from "../containers/admin/article/ArticleEditContainer";
import Article from "../component/admin/article/Article";
import WrappedBasicSetting from "../component/admin/personal/BasicSetting";
import ArticleListContainer from "../containers/admin/personal/ArticleListContainer";
import ArticleDetailContainer from "../containers/admin/article/ArticleDetailContainer";

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
            <Route path='/admin' components={Admin}>
                <Route path='/admin/user/:userNo' components={UserDetail}/>
                <Route path='/admin/article/edit' components={ArticleEditContainer}/>
                <Route path='/admin/layout' components={Layout}/>
                <Route path='/admin/user' components={UserContainer}/>
                <Route path='/admin/article' components={Article}/>
                <Route path='/personal/settings/basic' components={WrappedBasicSetting}/>
                <Route path='/personal/liked_article' components={ArticleListContainer}/>
                <Route path='/article/:articleLinkId' components={ArticleDetailContainer}/>
            </Route>
        </Router>
    </Provider>
)

export default router