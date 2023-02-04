// base store tools
import { createStore, applyMiddleware } from "redux";
// middleware
import thunk from "redux-thunk";
// reducer >> state
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;
