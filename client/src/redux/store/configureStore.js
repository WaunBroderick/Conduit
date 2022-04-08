import { applyMiddleware, createStore, compose } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "../reducers/rootReducer";
import { persistConfig } from "../reducers/rootReducer";

import { userSlice } from "../reducers/user";

// Redux-Persist

import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const middlewares = [thunk, logger];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancers = composeEnhancers(applyMiddleware(thunk, logger));

  const store = createStore(persistedReducer, userSlice, enhancers);

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
