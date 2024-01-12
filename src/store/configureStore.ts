import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from './slices/authSlice';
import { cartReducer } from "./slices/cartSlice";
import { postReducer } from "./slices/postSlice";


const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    post: postReducer
});


export const globalStore = configureStore({
    reducer: rootReducer,
});