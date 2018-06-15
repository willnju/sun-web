/**
 * Created by will on 18/6/11.
 */
import React from 'react';
import {Row,Col} from 'antd';
import Sider from '../../component/admin/siderMenu';
import UserContainer from "./UserContainer";
import Layout from "../../component/admin/Layout";
import {Link} from "react-router";
import './index.scss';
class Admin extends React.Component{
    render(){
        return(
            <div className="admin">
                <div className="right"><Sider/></div>
                <div className="left">{this.props.children}</div>
            </div>
        )
    }
}
export default Admin;