import React from 'react'
import LzEditor from "react-lz-editor";
import {Button, Input} from "antd";
import Attach from "./Attach";
import TagInput from "./TagInput";

class ArticleEdit extends React.Component {
    receiveHtml(content) {
        console.log("recieved HTML content", content);
        this.props.receiveHtml(content);
    }
    onClick(content,e) {
        console.log("recieved HTML content", content);
        this.props.receiveHtml(content);
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
        let policy = "";
        const {responseList,htmlContent}=this.props;
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
                题名：
                <Input value="题名" id="input"/>
                <LzEditor active={true} importContent={htmlContent} cbReceiver={this.receiveHtml.bind(this)} uploadProps={uploadProps}
                          lang="en"/>
                <Attach/>
                <TagInput/>
                <br/>
                <Button >提交</Button>
            </div>
        );
    }
}

export default ArticleEdit;
