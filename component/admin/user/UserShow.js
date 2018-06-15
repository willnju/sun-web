import React, {Component} from 'react'
import {Button, Col, Divider, Icon, Modal, Row, Table} from "antd";
import WrappedRegistrationForm from "./AntForm";
import './index.scss'
import {Link} from "react-router";

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);
const pageSizeOptions=['5', '10', '50'];
class UserShow extends Component {

    componentDidMount() {
        console.log("componentDidMount");
        this.props.initPage();
    }

    addUsers(user) {
        this.props.closeAddView();
        this.props.addUsers(user)
    }
    updateUser(user) {
        this.props.closeUpdateView();
        this.props.updateUser(user)
    }
    deleteUser(userNo) {
        this.props.deleteUser(userNo)
    }

    openUpdateView(v,e){
        console.log(v)
        this.props.openUpdateView(v)
    }
    columns = [{
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        render: text => <a className="user-name" href="javascript:;">{text}</a>,
    }, {
        title: '学号',
        dataIndex: 'userNo',
        key: 'userNo',
        render: text => <li><Link to={`/admin/user/${text}`}>{text}</Link></li>
    }, {
        title: '职称',
        dataIndex: 'title',
        key: 'title',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>

      <a href="javascript:;"  onClick={this.openUpdateView.bind(this,record.userNo)}>Update</a>
      <Divider type="vertical"/>
                 <a href="javascript:;" style={{hover: "block"}} onClick={this.deleteUser.bind(this,record.userNo)}>删除</a>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
        ),
    }];

    render() {
        const {users, handleChangePage, openAddView,
            closeAddView, users_add_modal,user_update_modal,
            closeUpdateView,user,users_page} = this.props;
        let page = {
            ...users_page,
            pageSize:5,
            pageSizeOptions:pageSizeOptions,
            showQuickJumper:true,
            hideOnSinglePage:true,
            onChange: handleChangePage,
        };
        console.log("u",user)
        return (
            <div className="admin-user">
                <Row type="flex" justify="end">
                    <Col span={4}> <Button className="add-user" type="primary" onClick={openAddView}>新增人员</Button></Col>
                </Row>

                <Table className="user-show-table" columns={this.columns} dataSource={
                    users} pagination={page}
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
                <Modal
                    title="Add Modal"
                    visible={users_add_modal}
                    onCancel={closeAddView}
                >
                    <WrappedRegistrationForm handleAction={this.addUsers.bind(this)}/>
                </Modal>
                <Modal
                    title="Update Modal"
                    visible={user_update_modal}
                    onCancel={closeUpdateView}
                >
                    <WrappedRegistrationForm user={user} handleAction={this.updateUser.bind(this)}/>
                </Modal>
            </div>
        )
    }
}

export default UserShow;
