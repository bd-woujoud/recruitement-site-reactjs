import { configureStore } from '@reduxjs/toolkit';
import entreprisesReducer from '../features/entreprises/entrepriseSlice';
import candidatsReducer from '../features/candidats/candidatSlice';
import usersReducer from '../features/users/userSlice';
import offreEmploiReducer from '../features/offres/offreEmploiSlice'
import categoriesReducer from '../features/categories/categoriesSlice'
import commentReducer from '../features/comments/commentSlice'
import condidatureReducer from '../features/condidatures/condidatureSlice'


export const store = configureStore({
    reducer: {
        entreprises: entreprisesReducer,
        candidats: candidatsReducer,
        users: usersReducer,
        offres: offreEmploiReducer,
        categories: categoriesReducer,
        comments: commentReducer,
        condidature:condidatureReducer
    },
});