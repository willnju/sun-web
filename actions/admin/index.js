import MyFetch from "../../utils/MyFetch";
import {SHOW_USERS, SHOW_USERS_ADD_MODAL} from "../../reducers/home";
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
                message.success("ok",1)
                MyFetch.get("admin/user/list").then(function (res) {
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