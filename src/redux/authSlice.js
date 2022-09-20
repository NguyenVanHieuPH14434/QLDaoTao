import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
        login:{
            currentUser:null,
            isFetching:false,
            error : false
        }
    }, 
    reducer:{
        loginStart: (state) => {
            state.login.isFetching = true;
        }, 
        loginSuccess : (state,action) => {
            state.login.isFetching = false;
            state.login.currentuser = action.playload;
        }, 
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed
} = authSlice.actions;

export default authSlice.reducer