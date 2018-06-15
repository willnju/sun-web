import MyFetch from "../../utils/MyFetch";
import {SHOW_ARTICLES} from "../../reducers/home";
import PageUtils from "../../utils/PageUtils";

import {RESPONSSE_LIST} from "../../reducers/home";


export function  receiveHtml(data) {
    return (dispatch) => {
        dispatch(RESPONSSE_LIST(data))
    }
}
export function initPage() {
    return(dispatch)=> {
        const p = {
            pageNum: 1,
            pageSize: 10,
            channelId:3,
            columnId:3,
        };
        init(p, dispatch);
    }
}
function init(p, dispatch) {
    MyFetch.get("admin/article/article", p).then(function (res) {
        console.log(res.data.list);
        dispatch(SHOW_ARTICLES(res.data.list,PageUtils.getPage(res)))
    })
}
export function handleChangePage  (page) {
    return (dispatch) =>{
        MyFetch.get("admin/article/article", page).then(function (res) {
            console.log(res);
            dispatch(SHOW_ARTICLES(res.data.list,PageUtils.getPage(res)))
        })
    }
}