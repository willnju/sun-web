import MyFetch from "../../utils/MyFetch";
import { message } from 'antd';
import {RESPONSSE_LIST} from "../../reducers/home";


export function  receiveHtml(data){
    return (dispatch)=>{ dispatch(RESPONSSE_LIST(data))}
}