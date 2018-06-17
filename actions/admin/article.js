import MyFetch from "../../utils/MyFetch";
import {CHANGE_ARTICLE_TAGS, CHANGE_CHANNELS, CHANGE_COLUMNS, SHOW_ARTICLES} from "../../reducers/home";
import PageUtils from "../../utils/PageUtils";

import {RESPONSSE_LIST} from "../../reducers/home";


export function  receiveHtml(data) {
    return (dispatch) => {
        dispatch(RESPONSSE_LIST(data))
        let tags=['a','b','c'];
        dispatch(CHANGE_ARTICLE_TAGS(tags));
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
    MyFetch.get("admin/article/list", p).then(function (res) {
        console.log(res.data.list);
        dispatch(SHOW_ARTICLES(res.data.list,PageUtils.getPage(res)))
    })
}
export function handleChangePage  (page) {
    return (dispatch) =>{
        MyFetch.get("admin/article/list", page).then(function (res) {
            console.log(res);
            dispatch(SHOW_ARTICLES(res.data.list,PageUtils.getPage(res)))
        })
    }
}

export function initChannels  () {
    return (dispatch) =>{
        let page={
            pageNum:1,
            pageSize:0
        }
        MyFetch.get("front/channel",page).then(function (res) {
            console.log("res",res.data.list)
            dispatch(CHANGE_CHANNELS(res.data.list))
        })
    }
}
export function initColumns  (channel) {
    return (dispatch) =>{
        let param={
            channel:channel,
            pageNum:1,
            pageSize:0
        }
        MyFetch.get("front/column",param).then(function (res) {
            if(res.code==200 && res.data.list.length>0){
                console.log("res",res.data.list)
                dispatch(CHANGE_COLUMNS(res.data.list))
            }else {
                dispatch(CHANGE_COLUMNS([]))
            }

        })
    }
}