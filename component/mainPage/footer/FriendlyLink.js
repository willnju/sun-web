/**
 * Created by will on 18/6/14.
 */
import React from 'react';
class FriendlyLink extends React.Component{
    constructor(){
        super();
        this.state={
            links:["南大官网","小百合","南京大学信息管理学院","南京大学图书馆","网络信息中心","南京大学教务网","南京大学研究生院","南京大学保卫处","南京大学校医院","南京大学财务处"]
        }
    }
    render(){
        const { links } = this.state;
        return(
            <div className="link">
                <div className="link-title">友情链接</div>
                <ul className="link-area">
                    {links.map((link,i)=><li className="link-name">{link}</li>)}
                </ul>
            </div>
        )
    }
}
export default FriendlyLink