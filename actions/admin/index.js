import MyFetch from "../../utils/MyFetch";
import {SHOW_USERS, SHOW_USERS_ADD_MODAL, SHOW_USERS_UPDATE_MODAL, USER_INFO} from "../../reducers/home";
import { message } from 'antd';
export function onComponentDidMount() {
    return(dispatch)=> {
        const p = {
            pageNum: 1,
            pageSize: 3
        };
        MyFetch.get("admin/user/list", p).then(function (res) {
            console.log(res.data.list);
            dispatch(SHOW_USERS(res.data.list))
        })
    }
}


export function handleChangePage  (page) {
    return (dispatch) =>{
        const p = {
            pageNum: page,
            pageSize: 10
        };
        MyFetch.get("admin/user/list", p).then(function (res) {
            console.log(res)
            dispatch(SHOW_USERS(res.data.list))
        })
    }
}
export function   addUsers(param)  {
    return (dispatch)=> {
        console.log("add users param ", param);
        MyFetch.post("admin/user/add", param).then(function (res) {
            message.error("start");
            if (res.code = 400) {
                message.error(res.msg);
            } else {
                message.success("ok",1);
                MyFetch.get("admin/user/list").then(function (res) {
                    dispatch(SHOW_USERS(res.data.list))

                })
            }
            message.error("end");

        });
    }
}
export function   updateUser(param)  {
    return (dispatch)=> {
        console.log("update users param ", param);
        MyFetch.post("admin/user/add", param).then(function (res) {
            message.error("start");
            if (res.code = 400) {
                message.error(res.msg);
            } else {
                message.success("ok",1);
                MyFetch.get("admin/user/update").then(function (res) {
                    dispatch(SHOW_USERS(res.data.list))

                })
            }
            message.error("end");

        });
    }
}
export function  openAddView()  {
   return (dispatch)=>{ dispatch(SHOW_USERS_ADD_MODAL(true))}
}
export function  closeAddView(){
    return (dispatch)=>{ dispatch(SHOW_USERS_ADD_MODAL(false))}
}
export function  openUpdateView(data)  {
    console.log(data);
        return (dispatch)=> {
            let param={
                userNo:data
            }
            console.log("open user info  ", param);
            MyFetch.get("admin/user/info", param).then(function (res) {
                message.error("start");
                    console.log(res.data)
                        dispatch(SHOW_USERS_UPDATE_MODAL(true,res.data))
                message.error("end");

            });
        }
}
export function  closeUpdateView(){
    return (dispatch)=>{ dispatch(SHOW_USERS_UPDATE_MODAL(false))}
}