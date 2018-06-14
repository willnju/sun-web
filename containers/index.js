/**
 * Created by will on 18/6/14.
 */
import React from 'react';
import {Row} from 'antd';
import Title from '../component/mainPage/title';
import Footer from '../component/mainPage/footer'
import "./index.scss";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <Row className="main-page">
                <Row className="main-title"><Title/></Row>
                {this.props.children}
                <Footer/>
            </Row>
        )
    }
}
export default Home;