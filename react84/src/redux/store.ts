import { combineReducers, createStore } from "redux";
import { authReducer } from "./authState";
import { configureStore } from "@reduxjs/toolkit";

//single rudcer - before react 18
//export const store = createStore(authReducer)

//multiple reducers - before react 18
// const reducers = combineReducers({authState:authReducer});
// const store = createStore(reducers);

//react 18 -> reducers for store
const reducers = combineReducers({ authState: authReducer });
export const store = configureStore({ reducer: reducers });
