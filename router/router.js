/**
 * Created by will on 18/6/5.
 */
import React from 'react';
import {hashHistory, IndexRoute, Route, Router} from 'react-router';
import {Provider} from 'react-redux';
import $ from 'jquery';

import store from '../store/index';
import HomePage from '../containers/homePage/index';
import Admin from "../containers/admin";

let onEnter = () => {
    $('body').animate({scrollTop: 0});
};

const router = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <IndexRoute component={HomePage}/>
            <Route path='/home' components={HomePage}/>
            <Route path='/admin ' components={Admin}/>
        </Router>
    </Provider>
)

export default router;