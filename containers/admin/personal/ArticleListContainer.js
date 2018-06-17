import React from 'react';
import {connect} from 'react-redux'
import ArticleList from "../../../component/admin/personal/ArticleList";
import {bindActionCreators} from "redux";
import {handleChangePage, initPage} from "../../../actions/admin/personal";

const mapStateToProps = state => ({
    articles: state.personal.articles,
    articles_page: state.personal.articles_page,
});
const mapDispatchToProps = dispatch => ({
    initPage: bindActionCreators(initPage, dispatch),
    handleChangePage: bindActionCreators(handleChangePage, dispatch),

})
const ArticleListContainer=connect(mapStateToProps,mapDispatchToProps)(ArticleList);
export default ArticleListContainer;
