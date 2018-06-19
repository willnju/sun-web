/**
 * Created by will on 18/6/11.
 */
import React from 'react';
import './index.scss';
import {Breadcrumb, Layout, Menu} from "antd";
import {Link} from "react-router";
const { Header, Content, Footer } = Layout;

class Admin extends React.Component{
    render(){
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">发现</Menu.Item>
                        <Menu.Item key="2"><Link to="/personal/home">我的主页</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/admin/management">系统管理</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="left">{this.props.children}></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>

        )
    }
}
export default Admin;