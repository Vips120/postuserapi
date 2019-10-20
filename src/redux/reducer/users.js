import {USER} from '../action/index'
const Users = (state=[], action) => {
    switch(action.type) {
         case USER:
            return [...state,action.payload];
            default:
                return state;            
    }
}

export default Users;