import $ from 'jquery';
export function loadBanner(opt={}) {
    const {parameter,cb}=opt;
    return (dispatch,getState)=>{

        $.get('/home/banner',parameter)
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