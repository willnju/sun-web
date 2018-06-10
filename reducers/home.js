export function homeBanner(state=null,action){
    switch (action.type){
        case 'SEARCH_SUCCESS':
            return action.data;
        default:
            return state;
    }
}