import * as type from "../action-types/PostsActionTypes";
import { Dispatch } from "redux";
import { getPosts } from './../../services/postsService';

export const fetchPosts = () => async (dispatch: Dispatch<type.PostsDispatchTypes>) => {
    try {
        dispatch({
            type: type.POSTS_LOADING,
        });

        const res = await getPosts()

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
