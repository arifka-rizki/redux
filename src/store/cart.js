import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "carts",
    initialState: initialState,
    reducers: {
        productAddedToCart: (carts, action) => {
            carts.push({
                id: ++lastId,
                productId: action.payload.productId,
                quantity: action.payload.quantity
            });
        },
        productRemovedFromCart: (carts, action) => {
            const index = carts.findIndex(product => product.id === action.payload.id);
            if(index > -1) {
                carts.splice(index, 1);
            }
        }
    }
});

export const { productAddedToCart, productRemovedFromCart } = slice.actions;
export default slice.reducer;
