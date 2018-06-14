import React from 'react'
import LzEditor from "react-lz-editor";

class ArticleEdit extends React.Component {
    receiveHtml(content) {
        console.log("recieved HTML content", content);
        this.props.receiveHtml([]);
    }
    render() {
        const {responseList,markdownContent,htmlContent}=this.props;
        const uploadProps = {
            action: "http://v0.api.upyun.com/devopee",
            onChange: this.onChange,
            listType: 'picture',
            fileList: responseList,
            data: (file) => {

            },
            multiple: true,
            beforeUpload: this.beforeUpload,
            showUploadList: true
        };
        return (
            <div>
                <div>Editor demo 1 (use default html format ):
                </div>
                <LzEditor active={true} importContent={htmlContent} cbReceiver={this.receiveHtml.bind(this)} uploadProps={uploadProps}
                          lang="en"/>
                <br/>
                <div>Editor demo 2 (use markdown format ):
                </div>
                <LzEditor
                    active={true}
                    importContent={markdownContent}
                    cbReceiver={markdownContent}
                    image={false}
                    video={false}
                    audio={false}
                    convertFormat="markdown"/>
            </div>
        );
    }
}

export default ArticleEdit;
