import React from 'react'
import MyFetch from "../../../utils/MyFetch";
import Comment from "./Comment";
import {BackTop, Button, Divider} from "antd";
import './index.scss'
import {Link} from "react-router";

class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            articleLinkId: this.props.params.articleLinkId,
            canEdit: false,
        }
    }

    componentDidMount() {
        console.log("componentDidMount start")
        let that = this;
        let param = {
            articleLinkId: this.state.articleLinkId,
        }
        MyFetch.get("article/detail", param).then(function (res) {
            console.log(res);
            that.setState({
                article: res.data,
            })
        })
        console.log("componentDidMount end")

    }

    render() {
        const {article, articleLinkId} = this.state;
        console.log("article detail ", article)

        return (
            <div className="note">
                <div className="container">
                    <div className="article">
                        <h1>{article.articleTitle}</h1>
                        <div><Button ><Link to={`/admin/article/edit/${article.articleLinkId}`}>编辑</Link></Button></div>
                        <div className="show-content">
                            <div dangerouslySetInnerHTML={{
                                __html: article.articleContent
                            }}/>
                        </div>
                    </div>
                    <div>{article.articleTag}</div>
                    <Comment articleLinkId={articleLinkId}/>
                </div>
                <BackTop/>
            </div>
        )
    }
}

export default ArticleDetail
