import { Post } from "../../types/PostType";

export const POSTS_LOADING = "POSTS_LOADING";
export const POSTS_SUCCESS = "POSTS_SUCCESS";
export const POSTS_FAIL = "POSTS_FAIL";

type PostsLoading = {
  type: typeof POSTS_LOADING;
};

type PostsSuccess = {
  type: typeof POSTS_SUCCESS;
  payload: Post[];
};

type PostsFail = {
  type: typeof POSTS_FAIL;
  payload: any;
};

export type PostsDispatchTypes =
    | PostsLoading
    | PostsSuccess
    | PostsFail
