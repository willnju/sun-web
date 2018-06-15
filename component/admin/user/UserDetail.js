import React, {Component} from 'react'
import {Button, Col, Divider, Icon, Modal, Row, Table} from "antd";
import WrappedRegistrationForm from "./AntForm";
import UploadAvatar from "./UploadAvatar";
import './index.scss'
import {Link} from "react-router";

class UserDetail extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div >
                {this.props.params.userNo}
            </div>
        )
    }
}

export default UserDetail;
