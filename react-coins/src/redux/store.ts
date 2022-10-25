import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { coinReducer } from "./coinsState";


//combine reducers
const reducers = combineReducers({coinState:coinReducer});
export const store = configureStore({reducer:reducers});