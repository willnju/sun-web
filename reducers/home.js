export function homeBanner(state={},action){
    switch (action.type){
        case 'SEARCH_SUCCESS':
            return action.data;
        case SHOWUER:
            return{
                ...state,
                users:action.users,
            };
        case ADD_USER_MODAL:
            return{
                ...state,
                users_add_modal:action.users_add_modal
            };
        default:
            return state;
    }
}
const SHOWUER='showusers'
const ADD_USER_MODAL='add_user_modal'

export  const SHOW_USERS=(users)=>({type:SHOWUER,users:users});
export const SHOW_USERS_ADD_MODAL=(status)=>({type:ADD_USER_MODAL,users_add_modal:status})
