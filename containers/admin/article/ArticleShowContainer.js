import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import ArticleShow from "../../../component/admin/article/ArticleShow";
import {handleChangePage, initPage} from "../../../actions/admin/article";

const mapStateToProps = state => ({
    articles: state.admin.articles,
    articles_page: state.admin.articles_page,

});
const mapDispatchToProps = dispatch => ({
    initPage: bindActionCreators(initPage, dispatch),
    handleChangePage: bindActionCreators(handleChangePage, dispatch),

})
const ArticleShowContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleShow);
export default ArticleShowContainer;
