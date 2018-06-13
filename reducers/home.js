export function homeBanner(state={},action){
    switch (action.type){
        case 'SEARCH_SUCCESS':
            return action.data;
        default:
            return state;
    }
}
export function admin(state={},action){
    switch (action.type){
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
        case UPDATE_USER_MODAL:
            return{
                ...state,
                users_update_modal:action.users_update_modal,
                user:action.user,
            };
        case USER:
            return{
                ...state,
                user:action.user
            };
        default:
            return state;
    }
}
const SHOWUER='showusers'
const ADD_USER_MODAL='add_user_modal'
const UPDATE_USER_MODAL='update_user_modal'
const USER='user'


export  const SHOW_USERS=(users)=>({type:SHOWUER,users:users});
export const SHOW_USERS_ADD_MODAL=(status)=>({type:ADD_USER_MODAL,users_add_modal:status})
export const SHOW_USERS_UPDATE_MODAL=(status,data)=>({type:UPDATE_USER_MODAL,users_update_modal:status,user:data})
export const USER_INFO=(user)=>({type:USER,user:user});

