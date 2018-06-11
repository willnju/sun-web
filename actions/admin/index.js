import $ from 'jquery';
import MyFetch from "../../utils/MyFetch";

export function loadBanner(opt = {}) {
    const {parameter, cb} = opt;
    return (dispatch, getState) => {

        $.get('/home/banner', parameter)
            .done(res => {
                if (res.code == 200) {
                    dispatch({
                        type: 'SEARCH_SUCCESS',
                        data: res.data,
                    });
                    cb();
                } else {
                    console.log(res.code);
                }
            })
    }
}

export function onComponentDidMount(param) {
    MyFetch.get("admin/user/list", param).then(function (res) {
        console.log(res)
        dispatch(SHOW_USERS(res.data.list))
    })
}


export function handleChangePage  (param) {
    MyFetch.get("admin/user/list", param).then(function (res) {
        console.log(res)
        dispatch(SHOW_USERS(res.data.list))
    })
}
export function   addUsers(param)  {
    MyFetch.post("admin/user/add", param)
    const p = {
        pageNum: 1,
        pageSize: 3
    }
    MyFetch.get("admin/user/list", p).then(function (res) {
        console.log(res)
        dispatch(SHOW_USERS(res.data.list))
    })
}
export function  openAddView()  {

    dispatch(SHOW_USERS_ADD_MODAL(true))
}
export function  closeAddView(){
    dispatch(SHOW_USERS_ADD_MODAL(false))
}