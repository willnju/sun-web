import React from 'react'
import LzEditor from "react-lz-editor";
import {Button, Input, message} from "antd";
import Attach from "./Attach";
import ModalTagInput from "./ModalTagInput";
import MyFetch from "../../../utils/MyFetch";
import ChannelSelector from "./ChannelSelector";
import findIndex from "lodash/findIndex";
import uniqBy from "lodash/uniqBy";

class ArticleEdit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            articleLinkId:"",
            articleContent:'',
            htmlContent:"",
            articleTitle:"",
            tags:[],
            attachments:[],
            column:"",
            channel:"",
            responseList: [],
        }
        this.receiveHtml = this.receiveHtml.bind(this);
        this.onChange = this.onChange.bind(this);
        this.beforeUpload = this.beforeUpload.bind(this);
    }
    componentDidMount() {
        let linkId=this.props.params.articleLinkId;
        let that=this;
        if(linkId){
            let param = {
                articleLinkId: linkId,
            }
            MyFetch.get("article/detail", param).then(function (res) {
                let article=res.data;
                console.log("article.tag",article.tags)
                let atts=article.attachments;
                atts=atts.map((a,index)=>{
                    let file={
                        name:a.attachName,
                        url:a.attachUri,
                        uid:index,
                    }
                    return file;
                })
                that.setState({
                    articleLinkId:article.articleLinkId,
                    articleContent:article.articleContent,
                    htmlContent:article.articleContent,
                    articleTitle:article.articleTitle,
                    tags:article.tags,
                    attachments:atts,
                    column:"",
                    channel:"",
                })
            });
        }

    }

    beforeUpload(file) {
        console.log("beforeUpload like", file);
    }
    receiveHtml(content) {
        //清空responseList
        this.setState({responseList:[],
            articleContent:content,
        });
    }
    onChange(info) {
        let currFileList = info.fileList;
        currFileList = currFileList.filter((f) => (!f.length));
        let url = "http://localhost:8080";

        //Read remote address and display.
        //读取远程路径并显示链接
        currFileList = currFileList.map((file) => {
            if (file.response) {
                // concat url
                // 组件会将 file.url 作为链接进行展示
                file.url = url + file.response.data;
            }
            if (!file.length) {
                return file;
            }
        });
        let _this = this;

        // filtering successed files
        //按照服务器返回信息筛选成功上传的文件
        currFileList = currFileList.filter((file) => {
            //multiple uploading?
            //根据多选选项更新添加内容
            let hasNoExistCurrFileInUploadedList = !~findIndex(_this.state.responseList, item => item.name === file.name)
            if (hasNoExistCurrFileInUploadedList) {
                if (!!_this.props.isMultiple == true) {
                    _this.state.responseList.push(file);
                } else {
                    _this.state.responseList = [file];
                }
            }
            return !!file.response || (!!file.url && file.status == "done") || file.status == "uploading";
        });
        currFileList = uniqBy(currFileList, "uid");
        if (!!currFileList && currFileList.length != 0) {
            this.setState({responseList: currFileList});
        }
        _this.forceUpdate();
    }
    onBlurTitle(e) {
        let content=e.target.value;
        this.setState({
            articleTitle:content,
        })
    }
    onSubmit=()=> {
        const {articleLinkId,articleContent,tags,attachments,articleTitle,column,channel} = this.state;
        let param={
            articleLinkId,
            articleContent,
            tags,
            attachments,
            articleTitle,
            column,
            channel,
            articleIsPublished:true,
            private:false,
        }
        MyFetch.postJson("admin/article/addOrUpdate",param).then(function (res) {
            if(res.code==200){
                message.success("发布成功")
            }else {
                message.error(res.msg);
            }
        });
    }
    onSave=()=> {
        const {articleLinkId,articleContent,tags,attachments,articleTitle,column,channel} = this.state;
        let param={
            articleLinkId,
            articleContent,
            tags,
            attachments,
            articleTitle,
            column,
            channel,
            articleIsPublished:false,
            private:false,
        }
        MyFetch.postJson("admin/article/addOrUpdate",param).then(function (res) {
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
        console.log("attaches",attachs)
        this.setState({
            attachments:attachs
        })
    }
    render() {
        const {htmlContent,articleTitle,tags,attachments}=this.state;
        const {channels,columns,initChannels,initColumns}=this.props;
        const uploadProps = {
            action: "http://localhost:8080/file/upload/picture",
            onChange: this.onChange,
            listType: 'picture',
            fileList: this.state.responseList,
            data: (file) => {
                //自定义上传参数，这里使用UPYUN
                return {
                    name:file.name,
                }
            },
            multiple: true,
            beforeUpload: this.beforeUpload,
            showUploadList: true
        }
        console.log("articleTitle",articleTitle)
        console.log("attaches",attachments)
        return (
            <div className="edit-container">
                <div className="title-box">
                    <Input  defaultValue={articleTitle}  placeholder="输入文章标题"  maxLength="100" onBlur={this.onBlurTitle.bind(this)}/>
                </div>

                <LzEditor styles={{overflow:"scroll"}} active={true} importContent={htmlContent} cbReceiver={this.receiveHtml} uploadProps={uploadProps}
                          lang="en"/>
                文章标签:<ModalTagInput tags={tags} handleChangeTag={this.handleChangeTag}/>
                所属栏目:<ChannelSelector channels={channels} columns={columns }
                                      initChannels={initChannels} initColumns={initColumns}
                                      handleChangeChannleAndColumn={this.handleChangeChannelAndColumn}/>
                上传附件：<Attach attachments={attachments} handleChangeAttach={this.handleChangeAttach}/>
                <br/>
                <Button onClick={this.onSubmit}>发布文章</Button>
                <Button onClick={this.onSave}>保存文章</Button>

            </div>
        );
    }
}
export default ArticleEdit;
