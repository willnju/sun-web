/**
 * Created by will on 17/8/19.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/index';
import {Row,Col,Anchor} from 'antd';
const { Link } = Anchor;
class PaperDetail extends React.Component{
    componentWillMount(){
        const {params,searchAction}=this.props;
        console.log()
        searchAction.searchDetail({parameter:{paperId:params.linkId},cb:()=>{}})
    }
    render(){
        const {detail}=this.props;
        console.log(detail);
        let authors=[],depts=[];
        if(detail!=null){
            authors=detail.author.split(';');
            depts=detail.organ.split(';');
        }
        return(
            <div>
                {detail == null ? '' :
                    <div>
                        <Row type="flex" justify="start" className="detail">
                            <div className="detail-header-title">{detail.sourceName}</div>
                        </Row>
                        <Row>
                            <Col span={5}>
                                <Row className="detail-content-left">
                                    <Row className="detail-title">知识节点</Row>
                                    <Row className="detail-guid">
                                        <Anchor>
                                            {/*<Link href="#components-anchor-demo-basic" title="基本信息" />*/}
                                            <Link href="#components-anchor-demo-summary" title="摘要" />
                                            <Link href="#components-anchor-demo-institution" title="出版机构" />
                                            <Link href="#components-anchor-demo-keyWord" title="关键词" />
                                            <Link href="#components-anchor-demo-num" title="分类号" />
                                            <Link href="#components-anchor-demo-author" title="作者" />
                                        </Anchor>
                                    </Row>
                                </Row>
                            </Col>
                            <Col span={18}>
                                <Row className="content-title">
                                    {detail.title}
                                </Row>
                                <Row className="content-author" type="flex" justify="center">
                                    {authors.map((author,i)=><Col span={3} key={i}>{author}</Col>)}
                                </Row>
                                <Row className="content-dept" type="flex" justify="center">
                                    {depts.map((dept,i)=><Col offset={i==0?0:1} key={i}>{dept}</Col>)}
                                </Row>
                                <Row className="detail-content">
                                    <Row className="detail-item">
                                        <p id="components-anchor-demo-summary"><span className="ahead-name">摘要：</span>{detail.summary}</p>
                                    </Row>
                                    <Row className="detail-item">
                                        <p id="components-anchor-demo-institution"><span className="ahead-name">出版机构：</span>{detail.journal}</p>
                                    </Row>
                                    <Row className="detail-item">
                                        <p id="components-anchor-demo-keyWord"><span className="ahead-name">关键词：</span>{detail.keyword}</p>
                                    </Row>
                                    <Row className="detail-item">
                                        <p id="components-anchor-demo-num"><span className="ahead-name">分类号：</span>{detail.classifyCn1}</p>
                                    </Row>
                                    <Row className="detail-item">
                                        <p id="components-anchor-demo-num"><span className="ahead-name">文献类型：</span>{detail.paperTypeName}</p>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        searchAction: bindActionCreators(searchActions, dispatch),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PaperDetail);