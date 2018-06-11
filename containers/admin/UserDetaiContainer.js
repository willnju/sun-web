import React from 'react';
import { connect } from 'react-redux'
import MyFetch from "../../utils/MyFetch";
import UserShow from "../../component/user/UserShow";
import {SHOW_USERS, SHOW_USERS_ADD_MODAL} from "../../reducers/home";

const mapStateToProps = state => ({
  users:state.users,
  users_add_modal:state.users_add_modal
});
const mapDispatchToProps = dispatch => ({
  onComponentDidMount : () => {
    MyFetch.get("admin/user/list","pageNum=1&pageSize=3").then(function (res) {
      console.log(res);
    dispatch(SHOW_USERS(res.data.list))
    })
  },
  handleChangePage : (page) => {
    const p={
      pageNum:page,
      pageSize:3
    };
    MyFetch.get("admin/user/list",p).then(function (res) {
      console.log(res)
      dispatch(SHOW_USERS(res.data.list))
    })
  },
  addUsers : (param) => {
    MyFetch.post("admin/user/add",param);
    const p={
      pageNum:1,
      pageSize:3
    };
    MyFetch.get("admin/user/list",p).then(function (res) {
      console.log(res);
      dispatch(SHOW_USERS(res.data.list))
    })
  },
  openAddView : () => {

    dispatch(SHOW_USERS_ADD_MODAL(true))
  },
  closeAddView : () => {
    dispatch(SHOW_USERS_ADD_MODAL(false))
  },
})
const UserDetailContainer=connect(mapStateToProps,mapDispatchToProps)(UserShow);
export default UserDetailContainer
