import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateEntreprise,UpdateComapny } from './entrepriseAPI';

const initialState = {
    registerstatus: ''
};

export const createentreprise = createAsyncThunk(
    'entreprise/create',
    async (data) => {
        const response = await CreateEntreprise(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);


export const updateentreprise = createAsyncThunk(
    'entreprise/update',
    async (data) => {
        const response = await UpdateComapny(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);


export const entrepriseSlice = createSlice({
    name: 'entreprises',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(createentreprise.pending, (state) => {
                state.registerstatus = 'loading'
            })
            .addCase(createentreprise.fulfilled, (state, action) => {

                console.log(action.payload);


                if (action.payload.status === 200) {

                    state.registerstatus = 'success'
                } else {
                    state.registerstatus = 'failure'

                }


            })
            .addCase(createentreprise.rejected, (state, action) => {
                state.registerstatus = 'failure'
            })

            // 
            .addCase(updateentreprise.pending, (state) => {
            })
            .addCase(updateentreprise.fulfilled, (state, action) => {

                console.log(action.payload);


               /*  if (action.payload.status === 200) {

                    state.registerstatus = 'success'
                } else {
                    state.registerstatus = 'failure'

                } */


            })
            .addCase(updateentreprise.rejected, (state, action) => {
               /*  state.registerstatus = 'failure' */
            })
    },
});

export const { } = entrepriseSlice.actions;


export const selectregisterstatus = (state) => state.entreprises.registerstatus;


export default entrepriseSlice.reducer;