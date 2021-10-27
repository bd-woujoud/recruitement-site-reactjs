import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateOffreEmploi, GetALl, GetByID } from './offreEmploiAPI';

const initialState = {
    createoffrestatus: '',
    offres: [],
    filtredoffres: [],
    singleoffre: null,
    filterOptions: {
        locations: [],
        categories: [],
        contrats: []
    }
};

export const createOffre = createAsyncThunk(
    'offre/create',
    async (data) => {
        const response = await CreateOffreEmploi(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const getaaloffres = createAsyncThunk(
    'offre/getall',
    async () => {
        const response = await GetALl();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const getoffrebyid = createAsyncThunk(
    'offre/byid',
    async (id) => {
        const response = await GetByID(id);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);


export const offreSlice = createSlice({
    name: 'offres',
    initialState,
    reducers: {
        getOffreById: (state, action) => {
            console.log(action);
            for (let item of state.offres) {
                if (item._id === action.payload.id)
                    state.singleoffre = item
            }
        },


        filteroffres: (state, action) => {

            const { locations, contrats, categories } = state.filterOptions

            const { type, text, checked } = action.payload

            switch (action.payload.type) {
                case 'location':

                    if (checked) {
                        locations.push(action.payload.text)
                    } else {
                        const index = locations.indexOf(text);
                        if (index !== -1) locations.splice(index, 1);
                    }
                    ; break;
                case 'category':

                    if (checked) {
                        categories.push(action.payload.text)
                    } else {
                        const index = categories.indexOf(text);
                        if (index !== -1) categories.splice(index, 1);
                    }
                    ; break;
                case 'Contrat':

                    if (checked) {
                        contrats.push(action.payload.text)
                    } else {
                        const index = contrats.indexOf(text);
                        if (index !== -1) contrats.splice(index, 1);
                    }
                    ; break;

            }

            if (locations.length === 0 && contrats.length === 0 && categories.length === 0) {
                state.filtredoffres = state.offres
            }
            else {

                state.filtredoffres = []

                for (let location of state.filterOptions.locations) {

                    const data = [...state.offres]

                    const arr = data.filter(o => o.lieu === location)

                    state.filtredoffres = state.filtredoffres.concat(arr)

                }

                for (let category of state.filterOptions.categories) {

                    const data = [...state.offres]

                    const arr = data.filter(o => o.nom_categorie === category)

                    state.filtredoffres = state.filtredoffres.concat(arr)



                }

                for (let contrat of state.filterOptions.contrats) {

                    const data = [...state.offres]

                    const arr = data.filter(o => o.type_contrat === contrat)

                    state.filtredoffres = state.filtredoffres.concat(arr)


                }



            }
        }

        ,

        /* refreshfilterOptions: (state, action) => {
            switch (action.payload.type) {
                case 'location':
                    let pos1
                    let arr1 = [...state.filterOptions.locations]
                    for (let i in state.filterOptions.locations) {
                        if (state.filterOptions.locations[i] === action.payload.text)
                            pos1 = i
                    }
                    arr1.splice(pos1, 1)
                    state.filterOptions.locations = arr1
                        ; break;

                case 'category':
                    let pos2
                    let arr2 = [...state.filterOptions.categories]
                    for (let i in state.filterOptions.categories) {
                        if (state.filterOptions.categories[i] === action.payload.text)
                            pos2 = i
                    }
                    arr2.splice(pos2, 1)
                    state.filterOptions.categories = arr2
                        ; break;
                case 'Contrat':
                    let pos3
                    let arr3 = [...state.filterOptions.contrats]
                    for (let i in state.filterOptions.contrats) {
                        if (state.filterOptions.contrats[i] === action.payload.text)
                            pos3 = i
                    }
                    arr3.splice(pos3, 1)
                    state.filterOptions.contrats = arr3
                        ; break;

                default: break;
            }
        } */
    },

    extraReducers: (builder) => {
        builder
            .addCase(createOffre.pending, (state) => {
                state.createoffrestatus = 'loading'
            })
            .addCase(createOffre.fulfilled, (state, action) => {

                console.log(action.payload);


                if (action.payload.status === 200) {

                    state.createoffrestatus = 'success'
                } else {
                    state.createoffrestatus = 'failure'

                }


            })
            .addCase(createOffre.rejected, (state, action) => {
                state.createoffrestatus = 'failure'
            })

            .addCase(getaaloffres.pending, (state) => {

            })
            .addCase(getaaloffres.fulfilled, (state, action) => {

                console.log(action.payload);
                state.offres = action.payload.data
                state.filtredoffres = action.payload.data
            })
            .addCase(getaaloffres.rejected, (state, action) => {

            })
            .addCase(getoffrebyid.pending, (state) => {

            })
            .addCase(getoffrebyid.fulfilled, (state, action) => {

                console.log(action.payload);
                state.singleoffre = action.payload.data
            })
            .addCase(getoffrebyid.rejected, (state, action) => {

            })
    },
});

export const { getOffreById, filteroffres, refreshfilterOptions } = offreSlice.actions;


export const selectcreateoffrestatus = (state) => state.offres.createoffrestatus;
export const selectofres = (state) => state.offres.filtredoffres;
export const selectsingleoffre = (state) => state.offres.singleoffre;

export default offreSlice.reducer;