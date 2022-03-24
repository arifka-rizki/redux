import { createStore } from "redux";
import reducer from "./product";
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true })
)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;