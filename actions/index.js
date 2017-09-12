import $ from 'jquery';

export function loadSource() {
    return (dispatch,getState)=>{
        $.get('/semantic/data-source/get')
            .done(res=>{
                if(res.code==200){
                    dispatch({
                        type:'LOAD_SOURCE_SUCCESS',
                        data:res.data,
                    })
                }else {
                    console.log(res.code);
                }
            })
    }
}
export function search(opt={}) {
    const {parameter,cb}=opt;
    return (dispatch,getState)=>{
        $.get('/semantic/search/paper',parameter)
            .done(res=>{
                if(res.code==200){
                    dispatch({
                        type:'SEARCH_SUCCESS',
                        data:res.data,
                    });
                    cb();
                }else {
                    console.log(res.code);
                }
            })
    }
}

export function existTree(opt={}) {
    const {parameter,cb}=opt;
    return (dispatch,getState)=>{
        $.get('/semantic/entity/exist',parameter)
            .done(res=>{
                if(res.code==200){
                    dispatch({
                        type:'SEARCH_EXISTTREE_SUCCESS',
                        data:res.data,
                    });
                    cb(res.data);
                }else {
                    console.log(res.code);
                }
            })
    }
}
export function searchDetail(opt={}) {
    const {parameter,cb}=opt;
    return (dispatch,getState)=>{
        $.get('/semantic/detail/paper',parameter)
            .done(res=>{
                if(res.code==200){
                    dispatch({
                        type:'SEARCH_DETAIL_SUCCESS',
                        data:res.data,
                    });
                    cb();
                }else {
                    console.log(res.code);
                }
            })
    }
}

export function searchTreeMap(opt={}) {
    const {parameter,cb}=opt;
    return (dispatch,getState)=>{
        $.get('/semantic/entity/get',parameter)
            .done(res=>{
                if(res.code==200){
                    dispatch({
                        type:'SEARCH_TREE_SUCCESS',
                        data:res.data,
                    });
                    cb();
                }else {
                    console.log(res.code);
                }
            })
    }
}