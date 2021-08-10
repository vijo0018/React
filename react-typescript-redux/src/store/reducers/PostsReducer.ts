import { Post } from "../../types/PostType";
import * as type from "../action-types/PostsActionTypes";

type DefaultState = {
    posts: Post[];
    loading: boolean;
    error?: any;
};

const defaultState: DefaultState = {
    loading: true,
    posts: [],
    error: false,
};

const postsReducer = (state: DefaultState = defaultState, action: type.PostsDispatchTypes): DefaultState => {
    switch (action.type) {
        case type.POSTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case type.POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: false,
            };
        case type.POSTS_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default postsReducer;
