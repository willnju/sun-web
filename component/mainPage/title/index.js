/**
 * Created by will on 18/6/12.
 */
import React from 'react';
import { Row, Col } from 'antd';
import Menu from './menu/index';
import "./index.scss";
class Title extends React.Component{
    render(){
        return(
            <Row type="flex" justify="space-around" className="main-title">
                <Col span={5}>
                    <Row className="title-logo"/>
                </Col>
                <Col span={12}><Menu/></Col>
                <Col span={3}>登录</Col>
            </Row>
        )
    }
}
export default Title