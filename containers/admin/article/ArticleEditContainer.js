import React from 'react';
import {connect} from 'react-redux'
import ArticleEdit from "../../../component/admin/article/ArticleEdit";
import {bindActionCreators} from "redux";
import {initChannels, initColumns, receiveHtml} from "../../../actions/admin/article";

const mapStateToProps = state => ({
    // htmlContent: state.articleEdit.htmlContent,
    // responseList:state.articleEdit.responseList,
    channels: state.articleEdit.channels,
    columns:state.articleEdit.columns,
});
const mapDispatchToProps = dispatch => ({
    // receiveHtml:bindActionCreators(receiveHtml,dispatch),
    initChannels:bindActionCreators(initChannels,dispatch),
    initColumns:bindActionCreators(initColumns,dispatch),
});
export const ArticleEditContainer=connect(mapStateToProps,mapDispatchToProps)(ArticleEdit);

export default ArticleEditContainer;
