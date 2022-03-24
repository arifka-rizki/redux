import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {
    list: []
};

const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        apiProductsRequestSucceeded: (products, action) => {
            products.list = action.payload;
        },
        productAdded: (products, action) => {
            products.list.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price,
                hasDiscount: false,
            });
        },
        productUpdatedMarkDiscount: (products, action) => {
            const index = products.list.findIndex(product => product.id === action.payload.id);
            if(index > -1) {
                products[index].hasDiscount = action.payload.hasDiscount;
            }
        }
    }
});

export const { productAdded, productUpdatedMarkDiscount, apiProductsRequestSucceeded } = slice.actions;
export default slice.reducer;
