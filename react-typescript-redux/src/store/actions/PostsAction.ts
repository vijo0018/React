import * as type from "../action-types/PostsActionTypes";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchPosts = () => async (dispatch: Dispatch<type.PostsDispatchTypes>) => {
    try {
        dispatch({
            type: type.POSTS_LOADING,
        });

        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")

        dispatch({
            type: type.POSTS_SUCCESS,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: type.POSTS_FAIL,
            payload: e,
        });
    }
};
