import MyFetch from "../../utils/MyFetch";
import {SHOW_ARTICLES} from "../../reducers/home";
import PageUtils from "../../utils/PageUtils";

export function initPage() {
    return(dispatch)=> {
        const p = {
            pageNum: 1,
            pageSize: 4,
        };
        init(p, dispatch);
    }
}
function init(p, dispatch) {
    MyFetch.get("article/like", p).then(function (res) {
        dispatch(SHOW_ARTICLES(res.data.list,PageUtils.getPage(res.data)))
    })
}
export function handleChangePage  (page) {
    console.log("page",page)
    const p = {
        pageNum: page,
        pageSize: 4,
    };
    return (dispatch) =>{
        MyFetch.get("article/like", p).then(function (res) {
            console.log(res);
            dispatch(SHOW_ARTICLES(res.data.list,PageUtils.getPage(res.data)))
        })
    }
}