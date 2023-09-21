import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchParagraph = createAsyncThunk('paragraph/getParagraphs', async ({ paras, modal }) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${modal}`)
    return res.data;
})


const textSlice = createSlice({
    name: "paragraphs",
    initialState: {
        paragraph: [],
        paras: 4,
        modal: "text",
        status: "idle"
    },

    reducers: {
        changeParas: (state, action) => {
            state.paras = action.payload
        },

        changeModal: (state, action) => {
            state.modal = action.payload
        }
    },
    extraReducers: {
        [fetchParagraph.pending]: (state, action) => {
            state.status = "loading"
        },

        [fetchParagraph.fulfilled]: (state, action) => {
            state.paragraph = action.payload
            state.status = "succeedded"
        },

        [fetchParagraph.rejected]: (state, action) => {
            state.status = "failed"
        },
    }
})

export const { changeParas, changeModal } = textSlice.actions
export default textSlice.reducer