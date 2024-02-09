// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// NOTE: Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../redux/reducer";

export const store = configureStore({
  reducer: rootReducer,
});
