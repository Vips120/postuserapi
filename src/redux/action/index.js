import axios from 'axios';
export const POST_USER = "POST_USER";
export const USER = "USER";
export const userpost = () => {
    return async (dispatch) => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({type: POST_USER, payload: response.data})
    }
};


export const users = (id) => {
return async dispatch => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
    dispatch({type: USER, payload: response.data})
    };
}