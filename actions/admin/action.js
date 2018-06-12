const SHOWUER='showusers'
const ADD_USER_MODAL='add_user_modal'

export  const SHOW_USERS=(users)=>({type:SHOWUER,users:users});
export const SHOW_USERS_ADD_MODAL=(status)=>({type:ADD_USER_MODAL,users_add_modal:status})