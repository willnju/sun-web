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
        this.setState({
            tags
        })
    }
    handleChangeChannelAndColumn=(cc)=> {
        this.setState({
            cc
        })
    }
    handleChangeAttach=(attachs)=> {
        console.log("recieved attachs",attachs);
        this.setState({
            attachments:attachs
        })
    }
    onChange(info) {
        console.log("info",info)
        let currFileList = info.fileList;
        currFileList = currFileList.filter((f) => (!f.length));
        let url = "http://localhost:8080";

        //Read remote address and display.
        //读取远程路径并显示链接
        currFileList = currFileList.map((file) => {
            if (file.response) {
                // concat url
                // 组件会将 file.url 作为链接进行展示
                console.log("file",file)
                file.url = url + file.response.data;
            }
            if (!file.length) {
            }
            return file;
        });
        let _this = this;

        // filtering successed files
        //按照服务器返回信息筛选成功上传的文件
        currFileList = currFileList.filter((file) => {
            //multiple uploading?
            //根据多选选项更新添加内容
            // let hasNoExistCurrFileInUploadedList = !~findIndex(_this.state.responseList, item => item.name === file.name)
            // if (hasNoExistCurrFileInUploadedList) {
                if (!!_this.props.isMultiple == true) {
                    _this.state.responseList.push(file);
                } else {
                    _this.state.responseList = [file];
                }
            // }
            return !!file.response || (!!file.url && file.status == "done") || file.status == "uploading";
        });
        // currFileList = uniqBy(currFileList, "name");
        if (!!currFileList && currFileList.length != 0) {
            this.setState({responseList: currFileList});
        }
        _this.forceUpdate();
    }
    render() {
        const {responseList,articleContent}=this.state;
        const {channels,columns,initChannels,initColumns}=this.props;
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

                <LzEditor active={true} importContent={articleContent} cbReceiver={this.receiveHtml.bind(this)} uploadProps={uploadProps}
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
