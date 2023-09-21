import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidSlice";
import regionSlice from "./regionSlice";


export const store = configureStore({
    reducer: {
        reports: covidSlice,
        region: regionSlice,
    }
})