import React from 'react'
import {Button, Icon, Upload} from "antd";

class Attach extends React.Component {
    render() {
        const pref='http://172.26.39.240:8888';
        const props = {
            action: pref+'/file/upload/picture',
            onRemove(file){
            console.log("remove",file);
            },
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                fileList = fileList.map((file,index) => {
                    if (file.response) {
                        // Component will show file.url as link
                        console.log(file.response.code)
                        if(file.response.code==200) {
                            file.url = pref + file.response.data;
                        }
                    }
                    return file;
                });
                }
                console.log(fileList);
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
