import React, {Component} from 'react';
import {Values} from 'redux-form-website-template'
import UserShow from "./UserShow";

class User extends Component {
  render(){
    const { columns, users ,onComponentDidMount} = this.props;
    return (
      <UserShow  columns={columns} users={users} onComponentDidMount={onComponentDidMount}/>
    )
  }
}

export default User;
