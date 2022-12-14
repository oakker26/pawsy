import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "./cartItems";

const initialState = {
    cartItems:cartItems,
    amount: 0,
    total:0,
    isLoading:true
}

const cartSLice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const itemId=action.payload
            state.cartItems=state.cartItems.filter((item)=>item.id!== itemId)
        },
        increaseItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decreaseItem: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            });
            state.amount = amount;
            state.total = total;

        }
    }
})
export const { removeItem,increaseItem,decreaseItem ,calculateTotal} = cartSLice.actions;
export default cartSLice.reducer