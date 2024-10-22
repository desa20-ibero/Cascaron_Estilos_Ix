import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    productsAF: []
}
export const ProductsActivoFijoSlice = createSlice({
    name: 'ProductsActivoFijo',
    initialState,
    reducers: {
        setProductsAF: (state, { payload }) => {
           state.productsAF = payload;
        },
        cleanProductsAF:(state ) => {
        state.productsAF = [];
        }
    }
});

// ----Los creadores de acciones se generan para cada función de un reducer de casos. ----
export const { setProductsAF, cleanProductsAF } = ProductsActivoFijoSlice.actions;