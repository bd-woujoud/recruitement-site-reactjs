import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createComment } from './commenAPI';

const initialState = {
    craetecommentstatus: ''
};

export const creatcomment = createAsyncThunk(
    'comment/create',
    async (data) => {
        const response = await createComment(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(creatcomment.pending, (state) => {
                state.craetecommentstatus = 'loading'

            })
            .addCase(creatcomment.fulfilled, (state, action) => {
                state.craetecommentstatus = 'success'
                console.log(action.payload);
            })
            .addCase(creatcomment.rejected, (state, action) => {
                state.craetecommentstatus = 'failure'

            });
    },
});

export const { } = commentSlice.actions;

export const selectcreatecomment = (state) => state.comments.craetecommentstatus;

export default commentSlice.reducer;