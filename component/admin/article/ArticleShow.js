import React, {Component} from 'react'
import {Divider, Icon, Table} from "antd";
import './index.scss'
const pageSizeOptions=['5', '10', '50'];
class ArticleShow extends Component {

    componentDidMount() {
        console.log("componentDidMount");
        this.props.initPage();
    }
    columns = [{
        title: 'ID',
        dataIndex: 'articleId',
        key: 'articleId',
        render: text => <a className="user-name" href="javascript:;">{text}</a>,
    }, {
        title: '题名',
        dataIndex: 'articleTitle',
        key: 'articleTitle',
    }, {
        title: '标签',
        dataIndex: 'articleTag',
        key: 'articleTag',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>

      <a href="javascript:;" >Update</a>
      <Divider type="vertical"/>
                 <a href="javascript:;" style={{hover: "block"}}>删除</a>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
        ),
    }];
    render() {
        const {articles, handleChangePage,articles_page} = this.props;
        let page = {
            ...articles_page,
            pageSize:5,
            pageSizeOptions:pageSizeOptions,
            showQuickJumper:true,
            hideOnSinglePage:true,
            onChange: handleChangePage,
        };
        console.log("articles",articles)
        return (
            <div >
                <Table columns={this.columns} dataSource={
                    articles} pagination={page}
                       onRow={(record) => {
                           return {
                               onMouseEnter: () => {
                                   console.log(record.userNo)
                               },  // 鼠标移入行
                               onClick:()=>{
                               }
                           };
                       }}
                />
            </div>
        )
    }
}
export default ArticleShow;