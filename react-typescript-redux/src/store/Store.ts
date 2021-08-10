import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

const middleware = [thunk];

const middlewares = process.env.NODE_ENV !== 'production' ? [...middleware, logger] : middleware;

export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export type RootStore = ReturnType<typeof RootReducer>;

export const Persistor = persistStore(Store);

export default Store;

