import { combineReducers } from "redux";
import { persistReducer, WebStorage } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

import postsReducer from './PostsReducer';

type persistConfigType = {
    key: string;
    storage: WebStorage;
    whitelist: string[];
};

const persistConfig: persistConfigType = {
    key: "root",
    storage: sessionStorage,
    whitelist: ["posts"],
};

const RootReducer = combineReducers({
  posts: postsReducer,
});

export default persistReducer(persistConfig, RootReducer);

