/**
 * Created by will on 18/6/12.
 */
import React from 'react';
import { Row, Col } from 'antd';
import Menu from './menu';
import "./index.scss";
class Title extends React.Component{
    render(){
        return(
            <Row type="flex" justify="space-around" className="title">
                <Col span={4}>
                    <Row>
                        <Col span={10}><span className="title-logo"></span></Col>
                        <Col span={2}/>
                        <Col span={10}>NJU</Col>
                    </Row>
                </Col>
                <Col span={16}><Menu/></Col>
                <Col span={3}>denglu</Col>
            </Row>
        )
    }
}
export default Title