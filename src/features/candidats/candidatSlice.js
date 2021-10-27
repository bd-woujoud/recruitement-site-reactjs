import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateCandidat } from './candidatAPI';
import { GetAllCandidat } from './candidatAPI';

const initialState = {
    registerCandidatStatus: ''
};

export const createcandidat = createAsyncThunk(
    'candidat/create',
    async (data) => {
        const response = await CreateCandidat(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const getAllcandidat = createAsyncThunk(
    'candidat/get_all',
    async () => {
        const response = await GetAllCandidat();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const candidatSlice = createSlice({
    name: 'candidats',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(createcandidat.pending, (state) => {
                state.registerCandidatStatus = 'loading'
            })
            .addCase(createcandidat.fulfilled, (state, action) => {

                console.log(action.payload);

                if (action.payload.status === 200) {
                    state.registerCandidatStatus = 'success'
                } else {
                    state.registerCandidatStatus = 'failure'
                }

            })
            .addCase(createcandidat.rejected, (state, action) => {
                state.registerCandidatStatus = 'failure'
            })
            .addCase(getAllcandidat.pending, (state) => {
            })
            .addCase(getAllcandidat.fulfilled, (state, action) => {
                console.log(action.payload)
            })
            .addCase(getAllcandidat.rejected, (state, action) => {
            })
    },
});

export const { } = candidatSlice.actions;

export const selectregisterCandidatStatus = (state) => state.candidats.registerCandidatStatus;

export default candidatSlice.reducer;