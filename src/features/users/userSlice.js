import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../../pages/AuthService';
import {  sendMail, updateUser, uploadAvatar } from './userAPI';
const initialState = {
    loginstatus: {
        iserror: false,
        error: '',
        status: ''
    }

    ,
    isauth: false,
    autheduser: null,
    user: null,
    avatarstatus: '',
    updatestatus:''
};

export const login = createAsyncThunk(
    'users/login',
    async (data) => {
        const response = await AuthService (data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

// uploadd user avatar redux action
export const uploadavatar = createAsyncThunk(
    'users/avatar',
    async (data) => {
        const response = await uploadAvatar(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);
//update user
export const updateuser=createAsyncThunk(
    'users/updateUser',
    async (data) => {
        const response = await updateUser(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    } 
)
//sendMAil
export const sendmail=createAsyncThunk(
    'users/sendmail',
    async (data) => {
        const response = await sendMail(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    } 
)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loginstatus.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {

                console.log(action.payload);


                if (action.payload.data) {


                    state.loginstatus.status = 'success'
                    state.isauth = true
                    localStorage.setItem('isauth', true)
                    localStorage.setItem('role', action.payload.data.user.__t)
                    state.user = action.payload.data.user
                    state.autheduser = action.payload.data.user
                } else {

                    state.loginstatus.iserror = true
                    state.loginstatus.error = action.payload.response.data.message
                    state.loginstatus.status = 'failure'

                }


            })
            .addCase(login.rejected, (state, action) => {
                state.loginstatus.status = 'failure'
            })

            /// upload avaytar
            .addCase(uploadavatar.pending, (state, action) => {
                state.avatarstatus = 'loading'
            })
            .addCase(uploadavatar.fulfilled, (state, action) => {
                console.log(action.payload);

                if (action.payload.data) {
                    state.avatarstatus = 'success'
                    state.user = action.payload.data.data
                } else {
                    state.avatarstatus = 'failure'

                }

            })
            .addCase(uploadavatar.rejected, (state, action) => {

            })
            .addCase(updateuser.pending, (state, action) => {
                state.updatestatus = 'loading'
            })
            .addCase(updateuser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.updatestatus = 'success'

            })
            .addCase(updateuser.rejected, (state, action) => {
                state.updatestatus = 'failure'

            })
            .addCase(sendmail.pending, (state, action) => {
                state.updatestatus = 'loading'
            })
            .addCase(sendmail.fulfilled, (state, action) => {
                console.log(action.payload);
                state.updatestatus = 'success'

            })
            .addCase(sendmail.rejected, (state, action) => {
                state.updatestatus = 'failure'

            })
    },
});

export const { } = userSlice.actions;


export const selectloginstatus = (state) => state.users.loginstatus;
export const selectisauth = (state) => state.users.isauth;
export const selectautheduser = (state) => state.users.autheduser;
export const selectuser = (state) => state.users.user;
export const selectupdatestatus = (state) => state.users.updatestatus;


export default userSlice.reducer;