import React from 'react'
import MyFetch from "../../../utils/MyFetch";
import Comment from "./Comment";
import {BackTop} from "antd";

class ArticleDetail extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:"a"
        }
    }
    componentDidMount () {
        console.log("componentDidMount start")
        let that=this;
        MyFetch.get("admin/article/list").then(function (res) {
            console.log(res);
            that.setState({
                text:"b"
            })
        })
        console.log("componentDidMount end")

    }
    render() {
        let linkId=this.props.params.articleLinkId;
        console.log("article detail linkid",linkId)

        return (
            <div >
                <h1>标题</h1>
                {this.state.text}
                <p>正文</p>
        <Comment articleLinkId={linkId}/>
                <BackTop />
            </div>
        )
    }
}

export default ArticleDetail;
