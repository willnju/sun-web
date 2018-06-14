/**
 * Created by will on 18/6/12.
 */
import React from 'react';
import { Row, Col } from 'antd';

class Menu extends React.Component{
    constructor(){
        super();
        this.state={
            current_tab:0,
            tabs:['首页',"风采","成员","联系我们"]
        }
    }
    handelClick = e =>{
        debugger;
        this.setState({
            current_tab:e,
        })
    }
    render(){
        const { tabs, current_tab } = this.state;
        return(
            <Row type="flex" justify="space-around">
                {tabs.map((tab,i)=><Col key={i}><span className={i==current_tab?"menu-tab active":"menu-tab"} onClick={this.handelClick.bind(this,i)}>{tab}</span></Col>)}
            </Row>
        )
    }
}
export default Menu;