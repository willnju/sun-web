/**
 * Created by will on 18/6/2.
 */
import React from 'react';
import {Row} from 'antd';
import Title from '../../component/homePage/title'
import Banner from '../../component/homePage/banner';
import "./index.scss";
class BigData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <Row className="home">
                <Row className="home-title"><Title/></Row>
                <Row className="home-banner"><Banner/></Row>
            </Row>
        )
    }
}
export default BigData;