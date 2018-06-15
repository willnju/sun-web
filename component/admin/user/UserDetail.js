import React, {Component} from 'react'
import {Button, Col, Collapse, Divider, Icon, Modal, Row, Table} from "antd";
import WrappedRegistrationForm from "./AntForm";
import UploadAvatar from "./UploadAvatar";
import './index.scss'
import {Link} from "react-router";
import TagInput from "../article/TagInput";

const Panel = Collapse.Panel;

class UserDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const customPanelStyle = {
            background: '#c7f7f7',
            borderRadius: 4,
            marginBottom: 4,
            border: 0,
            overflow: 'hidden',
        };
        return (
            <div >
                <p>{this.props.params.userNo}</p>

                <Collapse bordered={false} defaultActiveKey={['1','2','3']}>
                    <Panel header="教育经历" key="1" style={customPanelStyle} showArrow={false}>
                        <TagInput/>
                    </Panel>
                    <Panel header="科研项目" key="2" style={customPanelStyle} showArrow={false}>
                        <TagInput/>
                    </Panel>
                    <Panel header="发表论文" key="3" style={customPanelStyle} showArrow={false}>
                        <TagInput/>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}

export default UserDetail;
