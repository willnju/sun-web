import React from 'react'
import {Tabs} from 'antd';
import ArticleShowContainer from "../../../containers/admin/article/ArticleShowContainer";

const TabPane = Tabs.TabPane;
class ArticlePane extends React.Component {
     callback(key) {
        console.log(key);
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                    <TabPane tab="我的博客" key="1"><ArticleShowContainer/></TabPane>
                    <TabPane tab="草稿箱" key="2">草稿箱还没写好，你TM别看了</TabPane>
                    <TabPane tab="回收站" key="3">回收站还没写好，你TM也别看了</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default ArticlePane;
