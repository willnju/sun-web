/**
 * Created by will on 18/6/11.
 */
import React from 'react';
import './index.scss';
import Sider from "../../component/admin/siderMenu";

class Management extends React.Component{
    render(){
        return(
            <div>
                <div className="right"><Sider/></div>
                <div className="left">{this.props.children}</div>
            </div>

        )
    }
}
export default Management;