import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [],
        filterItems: [],
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload)

        },
        deleteNote: (state, action) => {
            const id = action.payload
            const filtered_items = state.items.filter((item) => item.id !== id)
            state.items = filtered_items

            const filtered_filter = state.filterItems.filter((item) => item.id !== id)
            state.filterItems = filtered_filter
        },
        search: (state, action) => {
            // state.search = action.payload;
            const filtered = state.items.filter((item) => {
                return action.payload.toLowerCase() === '' ? item : item.text.toLowerCase().includes(action.payload)
            }
            )

            state.filterItems = filtered
        }
    },
})

export const { addNote, search, deleteNote } = notesSlice.actions
export default notesSlice.reducer