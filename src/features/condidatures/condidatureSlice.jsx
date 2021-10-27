import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateCondidature } from './condidatureAPI';

const initialState = {
    condidatureStatus:''
};

export const createcondidature = createAsyncThunk(
    'candidature/create',
    async (data) => {
        const response = await CreateCondidature(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const condidatureSlice = createSlice({
    name: 'condidatures',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(createcondidature.pending, (state) => {
                state.condidatureStatus = 'loading'
            })
            .addCase(createcondidature.fulfilled, (state, action) => {
                state.condidatureStatus = 'success'

                console.log(action.payload);
            })
            .addCase(createcondidature.rejected, (state, action) => {
                state.condidatureStatus = 'failure'

            })
           
    },
});

export const { } = condidatureSlice.actions;

export const selectcondidatureStatus = (state) => state.condidatures.condidatureStatus;

export default condidatureSlice.reducer;