import React, {Component} from 'react'
import {Button, Divider, Icon, Modal, Table} from "antd";
import WrappedRegistrationForm from "./AntForm";
import UploadAvatar from "./UploadAvatar";

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

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
        closeUpdateView,user} = this.props;
        const page = {
            onChange: handleChangePage,
            defaultCurrent: 1,
            total: 50
        };
        console.log("u",user)
        return (
            <div>
                <UploadAvatar/>
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
