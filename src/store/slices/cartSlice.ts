import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItems: JSON.parse(localStorage.getItem("cart")!) || [] },
    reducers: {
        addToCart: (state, action) => {
            // aynı üründen 2.kez eklendiğinde listeye eklenmesi yerine adedinin arttırılması..
            //Immer
            state.cartItems.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item: any) =>
                item.id !== action.payload.id);
        },
        clearCart: state => {
            state.cartItems = [];
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;