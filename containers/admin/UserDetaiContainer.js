import React from 'react';
import {connect} from 'react-redux'
import UserShow from "../../component/admin/user/UserShow";
import {
    addUsers,
    closeAddView, closeUpdateView, deleteUser,
    handleChangePage,
    initPage,
    openAddView,
    openUpdateView, updateUser
} from "../../actions/admin";
import {bindActionCreators} from "redux";

const mapStateToProps = state => ({
  users:state.homeBanner.users,
  users_add_modal:state.homeBanner.users_add_modal,
    user_update_modal:state.homeBanner.users_update_modal,
    user:state.homeBanner.user
});
const mapDispatchToProps = dispatch => ({
    initPage:bindActionCreators(initPage,dispatch),
    handleChangePage:bindActionCreators(handleChangePage,dispatch),
    addUsers:bindActionCreators(addUsers,dispatch),
    updateUser:bindActionCreators(updateUser,dispatch),
    deleteUser:bindActionCreators(deleteUser,dispatch),
    openAddView:bindActionCreators(openAddView,dispatch),
    closeAddView:bindActionCreators(closeAddView,dispatch),
    openUpdateView:bindActionCreators(openUpdateView,dispatch),
    closeUpdateView:bindActionCreators(closeUpdateView,dispatch)
})
const UserDetailContainer=connect(mapStateToProps,mapDispatchToProps)(UserShow);
export default UserDetailContainer
