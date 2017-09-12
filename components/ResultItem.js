/**
 * Created by will on 17/8/19.
 */
import React from 'react';
import {Row,Col} from 'antd';
import { Link } from 'react-router';

class ResultItem extends React.Component{
    render(){
        const {result,num,pageNum}=this.props;
        return(
            <Row className="item">
                <Col span={2}>{(pageNum-1)*10+num+1}</Col>
                <Col span={17}>
                    <Row><Link to={`/detail/${result.paperId}`}>{result.title}</Link></Row>
                    <Row>
                        {result.paperDescription}
                    </Row>
                    <Row>作者：{result.author}</Row>
                    <Row>出版年份：{result.year}</Row>
                </Col>
                <Col span={4} offset={1}>
                    <Row>来源数据库：<a href={result.sourceUrl} target="_blank">{result.sourceName}</a></Row>
                    <Row>来源期刊：{result.journal}</Row>
                </Col>
            </Row>
        )
    }
}
export default ResultItem