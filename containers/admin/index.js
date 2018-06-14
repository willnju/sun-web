/**
 * Created by will on 18/6/11.
 */
import React from 'react';
import UserContainer from "./UserContainer";
import Layout from "../../component/admin/Layout";
import {Link} from "react-router";

class Admin extends React.Component{
    render(){
        return(
            <div>
                <li><Link to="/user">用户管理</Link></li>
                <li><Link to="/layout">布局管理</Link></li>
                <li><Link to="/article">article管理</Link></li>

            </div>
        )
    }
}
export default Admin;