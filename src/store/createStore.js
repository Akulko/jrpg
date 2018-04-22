import { compose, createStore, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import rootReducer from "./modules/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = compose(composeWithDevTools(applyMiddleware(thunk)), persistState());

export default createStore(rootReducer, enhancer);
