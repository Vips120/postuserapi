import {POST_USER} from '../action/index'
const Posts = (state=[], action) => {
    switch(action.type) {
         case POST_USER:
            return action.payload;
            default:
                return state;            
    }
}

export default Posts;