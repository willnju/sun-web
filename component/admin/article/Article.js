import React from 'react'
import {Link} from "react-router";
import {Button, Col, Row} from "antd";
import ArticlePane from "./ArticlePane";

class Article extends React.Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="end">
                    <Col span={4}>  <Button> <Link to="/admin/article/edit">写博客</Link></Button></Col>
                </Row>
                <ArticlePane/>
            </div>
        );
    }
}

export default Article;
