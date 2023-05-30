import { createStore, combineReducers } from "redux";
import langReducer from "./reducers/lang.reducer";

const reducers = {
    lang: langReducer,
}

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;