export function searchResult(state=null,action){
    switch (action.type){
        case 'SEARCH_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function source(state=null,action){
    switch (action.type){
        case 'LOAD_SOURCE_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function detail(state=null,action){
    switch (action.type){
        case 'SEARCH_DETAIL_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

export function tree(state=null,action){
    switch (action.type){
        case 'SEARCH_TREE_SUCCESS':
            return action.data;
        default:
            return state;
    }
}

export function existTree(state=null,action){
    switch (action.type){
        case 'SEARCH_EXISTTREE_SUCCESS':
            return action.data;
        default:
            return state;
    }
}