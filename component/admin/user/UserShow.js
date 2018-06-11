import React, {Component} from 'react'
import Table from "antd/es/table/Table";
import Divider from "antd/es/divider/index";
import Icon from "antd/es/icon/index";
import Button from "antd/es/button/button";
import Modal from "antd/es/modal/Modal";
import SimpleForm from "../simple/SimpleForm";
import List from "antd/es/list/index";
import Avatar from "antd/es/avatar/index";


const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);

class UserShow extends Component {

  componentDidMount() {
    this.props.onComponentDidMount();
  }

  addUsers(data) {
    this.props.closeAddView();
    this.props.addUsers(data)
  }

  columns = [{
    title: 'userName',
    dataIndex: 'userName',
    key: 'userName',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'userNo',
    dataIndex: 'userNo',
    key: 'userNo',
  }, {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
      <a href="javascript:;" style={{hover: "block"}} onClick={this.props.openAddView}>Action 一 {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
    ),
  }];

  render() {
    const {users, handleChangePage, openAddView, closeAddView, users_add_modal} = this.props;
    const page = {
      onChange: handleChangePage,
      defaultCurrent: 1,
      total: 50
    }
    console.log(users);
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <Button type="primary" onClick={openAddView}>新增人员</Button>
              <Table bordered='true' columns={this.columns} dataSource={
                users} pagination={page}
                     onRow={(record) => {
                       return {
                         onMouseEnter: () => {
                           console.log(record.userNo)
                         },  // 鼠标移入行
                       };
                     }}

              />
              <Modal
                title="Basic Modal"
                visible={users_add_modal}
                onOk={this.addUsers.bind(this)}
                onCancel={closeAddView}
                onSubmit={this.addUsers.bind(this)}
              >
                <SimpleForm onSubmit={this.addUsers.bind(this)}/>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;
