import React from 'react';
import {connect} from 'react-redux'
import ArticleEdit from "../../component/admin/article/ArticleEdit";

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
})
const ArticleEditContainer=connect(mapStateToProps,mapDispatchToProps)(ArticleEdit);
export default ArticleEditContainer
