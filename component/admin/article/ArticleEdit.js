import React from 'react'
import LzEditor from "react-lz-editor";
import {Button, Input} from "antd";
import Attach from "./Attach";

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
        // let _this = this;
        //
        // // filtering successed files
        // //按照服务器返回信息筛选成功上传的文件
        // currFileList = currFileList.filter((file) => {
        //     //multiple uploading?
        //     //根据多选选项更新添加内容
        //     let hasNoExistCurrFileInUploadedList = !~findIndex(_this.state.responseList, item => item.name === file.name)
        //     if (hasNoExistCurrFileInUploadedList) {
        //         if (!!_this.props.isMultiple == true) {
        //             _this.state.responseList.push(file);
        //         } else {
        //             _this.state.responseList = [file];
        //         }
        //     }
        //     return !!file.response || (!!file.url && file.status == "done") || file.status == "uploading";
        // });
        // currFileList = uniqBy(currFileList, "name");
        // if (!!currFileList && currFileList.length != 0) {
        //     this.setState({responseList: currFileList});
        // }
        // _this.forceUpdate();
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
                <Button >提交</Button>
            </div>
        );
    }
}

export default ArticleEdit;
