import { createStore } from "redux";

const userReducer = (state, action)=>{
    switch(action.type){
        case 'LOGIN_USER':
            return state.user = action.payload
        case 'LOGOUT_USER':
                return state.user = {}
        default:
            return state.user
    }
}

const store = createStore(userReducer, [''])

export default store