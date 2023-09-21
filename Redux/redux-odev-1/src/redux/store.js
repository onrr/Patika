import { configureStore } from "@reduxjs/toolkit";
import notesSlice from './notes/notesSlice'


const store = configureStore({
    reducer: {
        notes: notesSlice,
    },
})

export default store