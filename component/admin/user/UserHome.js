import React, {Component} from 'react'
import {Button, Col, Row, Tabs} from "antd";
import './index.scss'
import ArticleListContainer from "../../../containers/admin/personal/ArticleListContainer";
import UserProfile from "./UserProfile";
import {Link} from "react-router";

const TabPane = Tabs.TabPane;

class UserHome extends Component {
    constructor(props){
        super(props);
    }
    callback(key) {
        console.log(key);
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
                <Row type="flex" justify="end">
                    <Col span={4}>  <Button> <Link to="/admin/article/edit">写博客</Link></Button></Col>
                </Row>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab="我喜欢的" key="1"><ArticleListContainer/></TabPane>
                    <TabPane tab="我的收藏" key="2">我的收藏</TabPane>
                    <TabPane tab="我的文章" key="3">我的文章</TabPane>
                    <TabPane tab="我的学术" key="4"><UserProfile /></TabPane>

                </Tabs>
            </div>
        )
    }
}

export default UserHome;
