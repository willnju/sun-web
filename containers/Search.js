/**
 * Created by will on 17/8/24.
 */
/**
 * Created by will on 17/8/15.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router'
import {Button,Row,Col,Input,Select,Pagination,Tag} from 'antd';
import * as searchActions from '../actions/index';
import ischool from '../img/ischoolslogo.png';
const Search = Input.Search;
const Option = Select.Option;
const { CheckableTag } = Tag;
class SearchPage extends React.Component{
    constructor() {
        super();
        this.state = {
            hasSearch: false,
            sourceId: 1,
            keyWord: '',
            existTree: false,
            searchType: 1,
            searchTypeName: ["题名", "关键字", "摘要"],
        }
    }
    componentWillMount(){
        const {searchAction}=this.props;
        searchAction.loadSource();
    }
    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            sourceId:value,
        });

    }
    handelSearch(value){
        const {sourceId,searchType}=this.state;
        hashHistory.push(`/search/${value}/${sourceId}/${searchType}`);
    }
    changeSearchType(num){
        this.setState({
            searchType:num+1,
        })
    }
    render(){
        const {source} = this.props;
        return(
            <div>
                {source?
                    <div>
                        <Row type="flex" justify="end" align="middle" className="sourcetype">
                            {this.state.searchTypeName.map((item,i)=>{
                                if(i+1==this.state.searchType){
                                    return <Col className="sourcetype-item active" onClick={this.changeSearchType.bind(this,i)} key={i}>{item}</Col>
                                }else {
                                    return <Col className="sourcetype-item" onClick={this.changeSearchType.bind(this,i)} key={i}>{item}</Col>
                                }
                            })}
                        </Row>
                        <div className="search-main">
                            <Row className="search-main-logo" type="flex" justify="center" align="middle">
                                <img src={ischool}/>
                            </Row>

                            <Row type="flex" justify="center" align="middle">
                                <Col>
                                    <Select defaultValue={source[0].sourceName} style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                                        {source.map((item,i)=><Option key={i} value={String(item.sourceId)}>{item.sourceName}</Option>)}
                                    </Select>
                                </Col>
                                <Col span={8}>
                                    <Search
                                        placeholder="请输入检索字段"
                                        onSearch={this.handelSearch.bind(this)}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>:''
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
