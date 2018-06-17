import React from 'react'
import {Avatar, List, Input, Button} from "antd";
import MyFetch from "../../../utils/MyFetch";
import PageUtils from "../../../utils/PageUtils";
import moment from "moment/moment";
import {IconText} from "../../common/IconText";
import Emoji from "../../common/Emoji";
const { TextArea } = Input;
class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments:[],
            page:{},
            displaySubmit:false,
        }
    }
    componentDidMount () {
        console.log("componentDidMount start");
        let that=this;
        console.log("comment linkid",this.props.articleLinkId);
        let p={
            articleLinkId:this.props.articleLinkId,
            pageNum:1,
            pageSize:5,
        };
        MyFetch.get("comment/list",p).then(function (res) {
            console.log(res);
            that.setState({
                comments:res.data.list,
                page:PageUtils.getPage(res.data)
            })
        })
        console.log("componentDidMount end")

    }
    changePage(page){
        const p = {
            articleLinkId:this.props.articleLinkId,
            pageNum: page,
            pageSize: 5,
        };
        let that=this;
        MyFetch.get("comment/list",p).then(function (res) {
            console.log(res);
            that.setState({
                comments:res.data.list,
                page:PageUtils.getPage(res.data)
            })
        })
    }
    focusComment(){
        console.log("focusComment")
        this.setState({
            displaySubmit:true,
        })
    }
    onSubmitComment(){
        console.log("onSubmitComment")
        let content=this.refs.textArea;
        console.log(content)
    }
    render() {
        const{comments,page}=this.state;

        console.log(comments)
        console.log("page",page)
        console.log("displaySubmit",this.state.displaySubmit)
        return (
            <div >
                <Avatar >孟</Avatar>
                <TextArea ref="textArea" rows={4} placeholder="评论" onFocus={this.focusComment.bind(this)}/>
                <Emoji/>
                <Button onClick={this.onSubmitComment.bind(this)} style={{display:this.state.displaySubmit}}>评论</Button>
                <List
                    itemLayout="vertical"
                    size="large"
                    split="true"
                    pagination={{
                        ...page,
                        pageSize:5,
                        onChange: this.changePage.bind(this),
                    }}
                    dataSource={comments}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.commentId}
                            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="33" />, <IconText type="message" text="2" />]}
                            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                        >
                            <List.Item.Meta
                                // avatar={<Avatar href="#" >item.articleAuthor</Avatar>}
                                title={<span><a href="#"> <Avatar >{item.commentUserId}</Avatar></a>发布时间： {moment(item.commnetDate).format("YYYY-MM-DD HH:mm:ss")}</span>}
                                description={item.articleTitle}
                            />
                           {item.commentContent}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default Comment;
