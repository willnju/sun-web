/**
 * Created by will on 18/6/11.
 */
import React from 'react';
import UserDetailContainer from "./UserDetaiContainer";
import Layout from "../../component/admin/Layout";

class Admin extends React.Component{
    render(){
        return(
            <div>
                {/*<Layout/>*/}
                <UserDetailContainer/>
            </div>
        )
    }
}
export default Admin;