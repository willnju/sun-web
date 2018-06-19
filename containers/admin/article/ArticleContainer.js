import React from 'react';
import {connect} from 'react-redux'
import ArticleAdmin from "../../../component/admin/article/ArticleAdmin";

const ArticleContainer=connect()(ArticleAdmin);

export default ArticleContainer;
