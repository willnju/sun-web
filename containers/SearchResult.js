/**
 * Created by will on 17/8/15.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button,Row,Col,Input,Select,Pagination,Icon,message} from 'antd';
import {Link} from 'react-router';
import {hashHistory} from 'react-router';
import * as searchActions from '../actions/index';
const Search = Input.Search;
const Option = Select.Option;
import ResultItem from '../components/ResultItem';
class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasSearch:false,
            sourceId:props.params.sourceId,
            keyWord:props.params.linkId,
            existTree:false,
            searchType:props.params.searchType,
            searchTypeName: ["题名", "关键字", "摘要"],
        }
    }
    componentWillMount(){
        const {searchAction,params}=this.props;
        console.log(params);
        searchAction.loadSource();
        const parameter={
            keyword:params.linkId,
            searchType:Number(params.searchType),
            sources:Number(params.sourceId),
            pageNo:1,
            pageSize:10,
        };
        searchAction.search({parameter:parameter,cb:()=>{
            this.setState({
                hasSearch:true,
                keyWord:params.linkId,
            });
        }});
        searchAction.existTree({parameter:{term:params.linkId},cb:(p)=>{
            console.log(p);
            this.setState({existTree:p})
        }})
    }
    handleChange(value) {
        console.log(`selected ${value}`);
        this.setState({
            sourceId:value,
        });

    }
    handelSearch(value){
        const {searchAction}=this.props;
        const parameter={
            keyword:value,
            searchType:1,
            sources:this.state.sourceId,
            pageNo:1,
            pageSize:10,
        }
        searchAction.search({parameter:parameter,cb:()=>{
            this.setState({
                hasSearch:true,
                keyWord:value,
            });
        }});
        searchAction.existTree({parameter:{term:value},cb:(p)=>{
            console.log(p);
            this.setState({existTree:p})
        }})
        hashHistory.push(`/search/${value}/${this.state.sourceId}/${this.state.searchType}`);
    }
    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
        const {searchAction}=this.props;
        const {keyWord,sourceId,searchType}=this.state;
        const parameter={
            keyword:keyWord,
            searchType:searchType,
            sources:sourceId,
            pageNo:pageNumber,
            pageSize:10,
        }
        searchAction.search({parameter:parameter,cb:()=>{}})
    }
    targetToTreeMap(){
    }
    changeSearchType(num){
        this.setState({
            searchType:num+1,
        })
    }
    alertMessage(){
        message.warning('此词无语义关系数据',1);
    }
    initSourceName(id){
        const {source,searchResult} = this.props;
        let sourceName='';
        source.map((item,i)=>{
            if(item.sourceId==id){
                sourceName=item.sourceName;
            }
        })
        return sourceName;
    }
    render(){
        const {hasSearch,sourceId}=this.state;
        const {source,searchResult} = this.props;
        return(
            <div>
                {source==null?'':
                    <div className="search-main-2">
                        <Row type="flex" justify={hasSearch?"center":"center"} align="middle">
                            <Col>
                                <Select defaultValue={this.initSourceName(sourceId)} style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                                    {source.map((item,i)=><Option key={i} value={String(item.sourceId)}>{item.sourceName}</Option>)}
                                </Select>
                            </Col>
                            <Col span={8}>
                                <Search
                                    placeholder={this.props.params.linkId}
                                    onSearch={this.handelSearch.bind(this)}
                                />
                            </Col>
                            {this.state.existTree?
                            <Col offset={1} className="targetToTreeMap" onClick={this.targetToTreeMap.bind(this)}>
                                <Link to={`/tree/${this.props.params.linkId}`}>查看语义关系<Icon type="arrow-right" /></Link>
                            </Col>:<Link onClick={this.alertMessage.bind(this)}>查看语义关系<Icon type="arrow-right" /></Link>}
                        </Row>
                        <Row type="flex" justify="center" align="middle" className="sourcetype-result">
                            {this.state.searchTypeName.map((item,i)=>{
                                if(i+1==this.state.searchType){
                                    return <Col className="sourcetype-item active" onClick={this.changeSearchType.bind(this,i)} key={i}>{item}</Col>
                                }else {
                                    return <Col className="sourcetype-item" onClick={this.changeSearchType.bind(this,i)} key={i}>{item}</Col>
                                }
                            })}
                        </Row>
                    </div>
                }
                {hasSearch ?
                    <div className="results">
                        {searchResult.list.map((result,i)=><ResultItem key={i} pageNum={searchResult.pageNum}
                                                                      result={result} num={i}/>)}
                    </div>:''
                }
                <div className="pagination">
                    {hasSearch?
                        <Row type="flex" justify="end">
                            <Col>
                                <Pagination showQuickJumper defaultCurrent={1} total={searchResult.pages*10} onChange={this.onChange.bind(this)} />
                            </Col>
                        </Row>:''}
                </div>
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
