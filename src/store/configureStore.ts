import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from './slices/authSlice';
import { cartReducer } from "./slices/cartSlice";

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
});


export const globalStore = configureStore({
    reducer: rootReducer,
});