import { createSlice } from "@reduxjs/toolkit";
import productsData from '../data/products.json'

const data = productsData.products

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: data,
        budget: 100000000000,
        current: 100000000000,

    },

    reducers: {
        basket: (state, action) => {
            const { count, id } = action.payload
            const product = state.items.find((product) => product.id === id)
            product.count = count;

            let total = 0
            state.items.map((product) => {
                total += product.count * product.productPrice
            });
            state.budget = state.current - total;
        },
    }
})

export const { basket } = productSlice.actions;
export default productSlice.reducer;