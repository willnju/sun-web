import React from 'react';
import {connect} from 'react-redux'
import Article from "../../../component/admin/article/Article";
import ArticleDetail from "../../../component/admin/article/ArticleDetail";

const ArticleDetailContainer=connect()(ArticleDetail);

export default ArticleDetailContainer;
