import React, {Component} from 'react'
import {Button, Divider, Icon, Modal, Table} from "antd";
import WrappedRegistrationForm from "./AntForm";

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

class UserShow extends Component {

    componentDidMount() {
        console.log("componentDidMount");
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
      <a href="javascript:;" onClick={this.props.openUpdateView}>Update</a>
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
        };
        console.log(users);
        return (
            <div>
                <Button type="primary" onClick={openAddView}>新增人员</Button>
                <Table columns={this.columns} dataSource={
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
                <WrappedRegistrationForm addUsers={this.addUsers.bind(this)}/>
                </Modal>
            </div>
        )
    }
}

export default UserShow;
