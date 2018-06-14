/**
 * Created by will on 18/6/14.
 */
import React from 'react';
import ActivityTab from './ActivityTab';
import './index.scss';
class Content extends React.Component{
    constructor(){
        super();
        this.state={
            tabs:[1,2,3]
        }
    }
    render(){
        const {tabs}=this.state;
        return(
            <div className="home-content">
                <div className="title">实验室风采</div>
                <div className="title">LIB ACTIVITY</div>
                <div className="activity-tabs">
                    <table className="activity-tabs-table">
                        <tr>
                            {tabs.map(()=><td><ActivityTab/></td>)}
                        </tr>
                        <tr>
                            {tabs.map(()=><td><ActivityTab/></td>)}
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default Content