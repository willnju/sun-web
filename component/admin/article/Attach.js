import React from 'react'
import {Button, Icon, Upload} from "antd";
const pref='http://172.26.39.240:8888';

class Attach extends React.Component {
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

        let attachs=fileList.map((file)=>{
            return {
                attachName:file.name,
                attachUri:file.url,
            };
        });
        this.props.handleChangeAttach(attachs);
        }
        console.log(fileList);
    }
    render() {
        const props = {
            action: pref+'/file/upload/picture',
            onRemove(file){
            console.log("remove",file);
            },
            onChange:this.onChange.bind(this),
            defaultFileList: [    ],
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
