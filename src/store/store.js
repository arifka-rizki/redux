import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer"
import logger from "./middleware/logger"
import api from "./middleware/api";
// import { devToolsEnhancer } from "@redux-devtools/extension";

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, api)
});

export default store;