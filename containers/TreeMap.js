/**
 * Created by will on 17/8/20.
 */
import React from 'react';
import {Row,Col} from 'antd'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Upload from '../components/Upload';
import * as searchActions from '../actions/index';
import Tree from '../components/Tree';
class TreeMap extends React.Component{
    componentWillMount(){
        const {searchAction}=this.props;
        searchAction.searchTreeMap({parameter:{term:this.props.params.keyWord},cb:()=>{}});
    }
     render(){
        const {tree}=this.props;
         return(
             <div className="treeMap">
                 <Row type="flex" justify="start" className="detail">
                     <div className="detail-header-title">{this.props.params.keyWord}</div>
                 </Row>
                 <Row>
                     <Col span={15}>
                         {tree==null?'':<Tree {...this.props}/>}
                     </Col>
                     <Col span={8} offset={1}>
                         <Row className="upload-title">文件上传</Row>
                         <Row type="flex" justify="start">
                             <Col><Upload/></Col>
                             <Col>*文件类型为.owl</Col>
                         </Row>
                     </Col>
                 </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(TreeMap);