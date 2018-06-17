/**
 * Created by will on 18/6/12.
 */
import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {Link} from "react-router";

class ProfileSettingSider extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }
    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <Link to="/personal/settings/basic">基础设置</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <Link to="/personal/settings/profile">个人资料</Link>
                </Menu.Item>

            </Menu>
        );
    }
}

export default ProfileSettingSider