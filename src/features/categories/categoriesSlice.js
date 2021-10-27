import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCategories } from './categoriesAPI';

const initialState = {
    categories: [],
    categorynames: []
};

export const getallcategories = createAsyncThunk(
    'categories/getall',
    async () => {
        const response = await getAllCategories();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    

    },

    extraReducers: (builder) => {
        builder
            .addCase(getallcategories.pending, (state) => {

            })
            .addCase(getallcategories.fulfilled, (state, action) => {
                console.log(action.payload);
                state.categories = action.payload.data

                let arr = []

                for (let item of action.payload.data) {
                    arr.push(item.nom_categorie)
                }

                state.categorynames = arr
            })
            .addCase(getallcategories.rejected, (state, action) => {

            });
    },
});

export const { } = categoriesSlice.actions;


export const selectcategories = (state) => state.categories.categories;
export const selectcategorynames = (state) => state.categories.categorynames;


export default categoriesSlice.reducer;