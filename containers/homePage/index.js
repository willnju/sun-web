/**
 * Created by will on 18/6/2.
 */
import React from 'react';
import {Row} from 'antd';
import Banner from '../../component/homePage/banner';
import AboutUs from '../../component/homePage/aboutUs';
import Content from '../../component/homePage/content';
import "./index.scss";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <div className="home-page">
                <Row className="home-banner"><Banner/></Row>
                <div className="home-description">
                    <Content/>
                    <AboutUs/>
                </div>
            </div>
        )
    }
}
export default Home;