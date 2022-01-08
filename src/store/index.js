import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import clients from "./clients";
import selectedClient from "./selectedClient";
import trips from "./trips";

const reducer = combineReducers({ clients, selectedClient, trips });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
