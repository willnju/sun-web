import React, {Component} from 'react'
import './index.scss'
import {Avatar} from "antd";
import moment from "moment";

class ArticleUserShow extends Component {
    render() {
        const {author, date} = this.props;
        return (
            <div className="author">
                <a href={`http://localhost:8888/#/user/${author.userNo}`} className="avatar">
                <Avatar src={author.avatarUrl}/>
                </a>
                <div className="info">
                    <span className="name">{author.userName}</span>
                    <div className="meta">{moment(date).format("YYYY-MM-DD HH:mm")}</div>
                </div>
            </div>
        )
    }
}

export default ArticleUserShow;