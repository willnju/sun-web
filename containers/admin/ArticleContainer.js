import React from 'react';
import {connect} from 'react-redux'
import ArticleEdit from "../../component/admin/article/ArticleEdit";
import {bindActionCreators} from "redux";
import {receiveHtml} from "../../actions/admin/article";

const mapStateToProps = state => ({
    htmlContent: state.article.htmlContent,
    markdownContent: state.article.markdownContent,
    responseList:state.article.responseList,
});
const mapDispatchToProps = dispatch => ({
    receiveHtml:bindActionCreators(receiveHtml,dispatch),
});
const ArticleEditContainer=connect(mapStateToProps,mapDispatchToProps)(ArticleEdit);
export default ArticleEditContainer
