import React from 'react'
import LzEditor from "react-lz-editor";
import {Button, Input, message} from "antd";
import Attach from "./Attach";
import ModalTagInput from "./ModalTagInput";
import MyFetch from "../../../utils/MyFetch";
import ChannelSelector from "./ChannelSelector";

class ArticleEdit extends React.Component{
    constructor(){
        super();
        this.state={
            articleContent:'',
            articleTitle:"",
            tags:[],
            attachments:[],
            column:"",
            channel:"",
        }
    }
    onBlurTitle(e) {
        let content=e.target.value;
        console.log("recieved title content", content);
        this.setState({
            articleTitle:content,
        })
    }
    receiveHtml(content) {
        console.log("recieved HTML content", content);
        this.setState({
            articleContent:content,
        })
        this.props.receiveHtml(content);
    }
    onClick=()=> {
        const {articleContent,tags,attachments,articleTitle,column,channel} = this.state;
        let param={
            articleContent,
            tags,
            attachments,
            articleTitle,
            column,
            channel,
            articleIsPublished:true,
            private:false,
        }
        console.log("recieved column",column);
        console.log("recieved HTML content",articleContent);
        console.log("recieved Tag ",tags);
        console.log("recieved attachments",attachments);
        MyFetch.postJson("admin/article/add",param).then(function (res) {
            if(res.code==200){
                message.success("发布成功")
            }else {
                message.error(res.msg);
            }
        });
    }
    handleChangeTag=(tags)=> {
        console.log("recieved tags",tags);
        this.setState({
            tags
        })
    }
    handleChangeChannelAndColumn=(cc)=> {
        this.setState({
            cc
        })
        console.log("recieved cc",cc);
        console.log("channel",this.state.channel)
    }
    handleChangeAttach=(attachs)=> {
        console.log("recieved attachs",attachs);
        this.setState({
            attachments:attachs
        })
    }
    onChange(info) {
        let currFileList = info.fileList;
        currFileList = currFileList.filter((f) => (!f.length));
        let url = "http://localhost:8080";
        //读取远程路径并显示链接
        console.log("info",info)
        //Read remote address and display.
        currFileList = currFileList.map((file) => {
            if (file.response) {
                // concat url
                // 组件会将 file.url 作为链接进行展示
                file.url = url + file.response.url;
            }
            if (!file.length) {
                return file;
            }
        });
    }
    render() {
        const {responseList,htmlContent,channels,columns,initChannels,initColumns}=this.props;
        const uploadProps = {
            action: "http://localhost:8080/file/upload/picture",
            onChange: this.onChange.bind(this),
            listType: 'picture',
            fileList: responseList,
            data: (file) => {
                console.log(file.name)
            },
            multiple: true,
            beforeUpload: this.beforeUpload,
            showUploadList: true
        };
        return (
            <div>
                <div className="title-box">
                    <Input   placeholder="输入文章标题" maxLength="100" onBlur={this.onBlurTitle.bind(this)}/>
                </div>

                <LzEditor active={true} importContent={htmlContent} cbReceiver={this.receiveHtml.bind(this)} uploadProps={uploadProps}
                          lang="en"/>
                文章标签:<ModalTagInput handleChangeTag={this.handleChangeTag}/>
                所属栏目:<ChannelSelector channels={channels} columns={columns }
                                      initChannels={initChannels} initColumns={initColumns}
                                      handleChangeChannleAndColumn={this.handleChangeChannelAndColumn}/>
                上传附件：<Attach handleChangeAttach={this.handleChangeAttach}/>
                <br/>
                <Button onClick={this.onClick}>提交</Button>
            </div>
        );
    }
}

export default ArticleEdit;
