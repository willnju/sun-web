/**
 * Created by will on 18/6/2.
 */
import React from 'react';
import {Row} from 'antd';
import './index.scss';
import {Link} from "react-router";
class BigData extends React.Component{
    render(){
        return(
            <Row className="admin">
                首页
                <li><Link to="/admin">管理员界面</Link></li>
            </Row>
        )
    }
}
export default BigData;