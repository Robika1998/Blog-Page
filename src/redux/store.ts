// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";

// import rootReducer from "./reducers";

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, undefined, applyMiddleware(thunk));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
