import React from 'react'
import {Button, Input} from "antd";
import ArticleEditContainer from "../../../containers/admin/ArticleContainer";

class Article extends React.Component {
    onClick(){
        //如何获取ArticleEditContainer的值
    }
    render() {
        return (
            <div>
                题名：
                <Input value="题名" id="input"/>
                <ArticleEditContainer/>
                <Button >提交</Button>
            </div>
        );
    }
}

export default Article;
