import React from 'react'
import {Avatar, List} from "antd";
import moment from "moment/moment";
import {IconText} from "../../common/IconText";
import './index.scss'
import ArticleUserShow from "./ArticleUserShow";

class CommentList extends React.Component {

    render() {
        const{comments,page,changePage }=this.props;
        console.log(comments)
        return (
            <div className="normal-comment-list">
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        ...page,
                        pageSize:5,
                        onChange: changePage,
                    }}
                    dataSource={comments}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.commentId}
                            className="comment"
                            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="33" />, <IconText type="message" text="2" />]}
                        >
                            <List.Item.Meta
                                // avatar={<Avatar href="#" >item.articleAuthor</Avatar>}
                                title={
                                    <ArticleUserShow author={item.commentUser} date={item.commnetDate}/>}
                            />
                           <p className="content">{item.commentContent}</p>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default CommentList;
