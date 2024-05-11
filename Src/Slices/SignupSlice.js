

import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {signup:{  email: "",
errorEmail: "",
isErrorEmail: null,
userName: "",
errorUserName: "",
isErrorUserName: null,
fullName: "",
errorFullName: "",
isErrorFullName: null,
//   datePickerDialog: false,
dob: "",
errorDob: "",
isErrorDate: null,
religion: "",
errorReligion: "",
isErrorReligion: null,
gender: "",
errorGender: "",
isErrorGender: null,
password: "",
errorPassword: "",
isErrorPassword: null,
passwordHidden: true,
confirmPassword: "",
errorConfirmPassword: "",
isErrorConfirmPassword: null,
confirmPasswordHidden: true,
}
};

// Create a slice
const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {   
    setToInitialState(state,action){
      state.signup={
        email: "",
        errorEmail: "",
        isErrorEmail: null,
        userName: "",
        errorUserName: "",
        isErrorUserName: null,
        fullName: "",
        errorFullName: "",
        isErrorFullName: null,
      //   datePickerDialog: false,
        dob: "",
        errorDob: "",
        isErrorDate: null,
        religion: "",
        errorReligion: "",
        isErrorReligion: null,
        gender: "",
        errorGender: "",
        isErrorGender: null,
        password: "",
        errorPassword: "",
        isErrorPassword: null,
        passwordHidden: true,
        confirmPassword: "",
        errorConfirmPassword: "",
        isErrorConfirmPassword: null,
        confirmPasswordHidden: true,
      }
    },
    setEmail(state, action) {
      state.signup.email = action.payload;
    },
    setErrorEmail(state, action) {
      state.signup.errorEmail = action.payload;
    },
    setIsErrorEmail(state, action) {
      state.signup.isErrorEmail = action.payload;
    },
    setUserName(state, action) {
      state.signup.userName = action.payload;
    },
    setErrorUserName(state, action) {
      state.signup.errorUserName = action.payload;
    },
    setIsErrorUserName(state, action) {
      state.signup.isErrorUserName = action.payload;
    },
    setFullName(state, action) {
      state.signup.fullName = action.payload;
    },
    setErrorFullName(state, action) {
      state.signup.errorFullName = action.payload;
    },
    setIsErrorFullName(state, action) {
      state.signup.isErrorFullName = action.payload;
    },
    // setDatePickerDialog(state, action) {
    //   state.signupState.datePickerDialog = action.payload;
    // },
    setDob(state, action) {
      state.signup.dob = action.payload;
    },
    setErrorDob(state, action) {
      state.signup.errorDob = action.payload;
    },
    setIsErrorDate(state, action) {
      state.signup.isErrorDate = action.payload;
    },
    setReligion(state, action) {
      state.signup.religion = action.payload;
    },
    setErrorReligion(state, action) {
      state.signup.errorReligion = action.payload;
    },
    setIsErrorReligion(state, action) {
      state.signup.isErrorReligion = action.payload;
    },
    setGender(state, action) {
      state.signup.gender = action.payload;
    },
    setErrorGender(state, action) {
      state.signup.errorGender = action.payload;
    },
    setIsErrorGender(state, action) {
      state.signup.isErrorGender = action.payload;
    },
    setPassword(state, action) {
      state.signup.password = action.payload;
    },
    setErrorPassword(state, action) {
      state.signup.errorPassword = action.payload;
    },
    setIsErrorPassword(state, action) {
      state.signup.isErrorPassword = action.payload;
    },
    setPasswordHidden(state, action) {
      state.signup.passwordHidden = !state.signupState.passwordHidden;
    },
    setConfirmPassword(state, action) {
      state.signup.confirmPassword = action.payload;
    },
    setErrorConfirmPassword(state, action) {
      state.signup.errorConfirmPassword = action.payload;
    },
    setIsErrorConfirmPassword(state, action) {
      state.signup.isErrorConfirmPassword = action.payload;
    },
    setConfirmPasswordHidden(state, action) {
      state.signup.confirmPasswordHidden = !state.signupState.confirmPasswordHidden
    },

    // Add more reducers as needed for each case...
  }
});

// Export action creators
export const {
  setToInitialState,
  setEmail,
  setErrorEmail,
  setIsErrorEmail,
  setUserName,
  setErrorUserName,
  setIsErrorUserName,
  setFullName,
  setErrorFullName,
  setIsErrorFullName,
//   setDatePickerDialog,
  setDob,
  setErrorDob,
  setIsErrorDate,
  setReligion,
  setErrorReligion,
  setIsErrorReligion,
  setGender,
  setErrorGender,
  setIsErrorGender,
  setPassword,
  setErrorPassword,
  setIsErrorPassword,
  setPasswordHidden,
  setConfirmPassword,
  setErrorConfirmPassword,
  setIsErrorConfirmPassword,
  setConfirmPasswordHidden,
} = signupSlice.actions;

// Export reducer
export const signupReducer= signupSlice.reducer;
