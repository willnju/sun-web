import React from 'react';
import {connect} from 'react-redux'
import ArticleEdit from "../../component/admin/article/ArticleEdit";
import {bindActionCreators} from "redux";
import {receiveHtml} from "../../actions/admin/article";

const mapStateToProps = state => ({
    htmlContent: state.articleEdit.htmlContent,
    markdownContent: state.articleEdit.markdownContent,
    responseList:state.articleEdit.responseList,
});
const mapDispatchToProps = dispatch => ({
    receiveHtml:bindActionCreators(receiveHtml,dispatch),
});
export const ArticleEditContainer=connect(mapStateToProps,mapDispatchToProps)(ArticleEdit);

export default ArticleEditContainer;
