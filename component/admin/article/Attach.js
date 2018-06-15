import React from 'react'
import {Button, Icon, Upload} from "antd";

class Attach extends React.Component {
    render() {
        const props = {
            action: 'http://localhost:8080/file/upload/picture',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    file.url=file.response.data;
                    console.log("file",file);
                    console.log("filelist",fileList)
                }
            },
            defaultFileList: [{
                uid: 1,
                name: 'xxx.png',
                status: 'done',
                reponse: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            }, {
                uid: 2,
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            }, {
                uid: 3,
                name: 'zzz.png',
                status: 'error',
                reponse: 'Server Error 500', // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            }],
        };
        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default Attach;
