import React from 'react';
import {connect} from 'react-redux'
import UserShow from "../../component/admin/user/UserShow";
import {addUsers, closeAddView, handleChangePage, onComponentDidMount, openAddView} from "../../actions/admin";
import {bindActionCreators} from "redux";

const mapStateToProps = state => ({
  users:state.homeBanner.users,
  users_add_modal:state.homeBanner.users_add_modal
});
const mapDispatchToProps = dispatch => ({
    onComponentDidMount:bindActionCreators(onComponentDidMount,dispatch),
    handleChangePage:bindActionCreators(handleChangePage,dispatch),
    addUsers:bindActionCreators(addUsers,dispatch),
    openAddView:bindActionCreators(openAddView,dispatch),
    closeAddView:bindActionCreators(closeAddView,dispatch)
})
const UserDetailContainer=connect(mapStateToProps,mapDispatchToProps)(UserShow);
export default UserDetailContainer
