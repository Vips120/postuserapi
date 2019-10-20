import {combineReducers} from 'redux';
import Posts from './post';
import Users from './users';
export default combineReducers({post: Posts, user:Users});