import React from 'react'
import {Button, Input} from "antd";
import ArticleEditContainer from "../../../containers/admin/ArticleContainer";
import Attach from "./Attach";

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
                <Attach/>
                <Button >提交</Button>
            </div>
        );
    }
}

export default Article;
