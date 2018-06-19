import React from 'react';
import {connect} from 'react-redux'
import ArticleAdmin from "../../../component/admin/article/ArticleAdmin";
import ArticleDetail from "../../../component/admin/article/ArticleDetail";

const ArticleDetailContainer=connect()(ArticleDetail);

export default ArticleDetailContainer;
