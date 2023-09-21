import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchData = createAsyncThunk(
    "reports/getReports",
    async (selected) => {
        const res = await axios(
            `https://covid-api.com/api/reports/total?${selected && selected !== 'global' ? "iso="+selected : ''}`
        );
        return res.data;
    }
);


export const covidSlice = createSlice({
    name: 'reports',
    initialState: {
        data: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchData.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = 'succeedded'
        },
        [fetchData.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
})

export const { a } = covidSlice.actions;

export default covidSlice.reducer;