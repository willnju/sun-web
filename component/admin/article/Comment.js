import React from 'react'
import MyFetch from "../../../utils/MyFetch";
import PageUtils from "../../../utils/PageUtils";
import CommentEditForm from "./CommentEdit";
import CommentList from "./CommentList";
import {message} from 'antd';
import './index.scss'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            comments: [],
            page: {},
            displaySubmit: "none",
        }
    }

    componentDidMount() {
        console.log("componentDidMount start");
        let that = this;
        console.log("comment linkid", this.props.articleLinkId);
        let p = {
            articleLinkId: this.props.articleLinkId,
            pageNum: 1,
            pageSize: 5,
        };
        MyFetch.get("comment/list", p).then(function (res) {
            console.log(res);
            that.setState({
                comments: res.data.list,
                page: PageUtils.getPage(res.data)
            })
        })
        console.log("componentDidMount end")

    }

    changePage = (page) => {
        let pageNum = 1;
        if (page) {
            pageNum = page;
        }
        const p = {
            articleLinkId: this.props.articleLinkId,
            pageNum: pageNum,
            pageSize: 5,
        };
        let that = this;
        MyFetch.get("comment/list", p).then(function (res) {
            console.log(res);
            that.setState({
                comments: res.data.list,
                page: PageUtils.getPage(res.data)
            })
        })
    };
    onSubmitComment = (comment) => {
        console.log("onSubmitComment")
        console.log(comment);
        let param = {
            articleLinkId: this.props.articleLinkId,
            commentContent: comment
        }
        let that = this;
        MyFetch.postJson("comment/add", param).then(function (res) {
            if (res.code == 200) {
                message.success("评论成功~")
                message.success(that.state.current)
                that.changePage(1)
            } else {
                message.error("评论失败：" + res.msg);
            }
        })
    };

    render() {
        const {comments, page} = this.state;
        return (
            <div className="comment-list">
                <CommentEditForm onSubmitComment={this.onSubmitComment}/>
                <CommentList comments={comments} page={page} changePage={this.changePage}/>
            </div>
        )
    }
}

export default Comment;
