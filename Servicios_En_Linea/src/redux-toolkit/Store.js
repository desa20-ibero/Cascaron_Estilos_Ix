import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./Slices/Ui/uiSlice";
import { AuthSlice } from "../components/Auth";
import { ProductsActivoFijoSlice } from "../components/Content-Admin/store";

export const store = configureStore({
    reducer:{
        ui: uiSlice.reducer,
        auth: AuthSlice.reducer,
        productsAF: ProductsActivoFijoSlice.reducer
    }
});