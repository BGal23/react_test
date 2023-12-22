// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";

// export const store = configureStore({
//   reducer: rootReducer,
// });

import { legacy_createStore as createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

const devTools = devToolsEnhancer();

export const store = createStore(rootReducer, devTools);
