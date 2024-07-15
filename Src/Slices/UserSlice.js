import { createSlice } from '@reduxjs/toolkit';
import { setToInitialState } from './SignupSlice';

// Initial states
const initialState = {
    userInfo: {
        userName: "",
        fullName: "",
        dateOfBirth: "",
        religion: "",
        gender: "",
        email: "",
        accessToken: "",
        refreshToken: ""
    }
};

// Create a slice
const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo(state,action){
            state.userInfo=action.payload
            // console.log('usersliceupdating user data: ',state)

        },
        setEmail(state, action) {
            state.userInfo.email = action.payload;
        },
        setUserName(state, action) {
            state.userInfo.userName = action.payload;
        },
        setFullName(state, action) {
            state.userInfo.fullName = action.payload;
        },
        setDateOfBirth(state, action) {
            state.userInfo.dateOfBirth = action.payload;
        },
        setReligion(state, action) {
            state.userInfo.religion = action.payload;
        },
        setGender(state, action) {
            state.userInfo.gender = action.payload;
        },
        setAccessToken(state, action) {
            state.userInfo.accessToken = action.payload;
        },
        setRefreshToken(state, action) {
            state.userInfo.refreshToken = action.payload;
        },
        setUserInfoToInitialState(state, action) {
            state.userInfo = initialState
            // console.log("from slice",state)
        },
    },
});

// Export actions
export const {
    setEmail,
    setAccessToken,
    setDateOfBirth,
    setFullName,
    setGender,
    setRefreshToken,
    setReligion,
    setUserName,
    setUserInfo,
    setUserInfoToInitialState,
} = userInfoSlice.actions;

// Export reducer
export const userInfoReducer = userInfoSlice.reducer;
