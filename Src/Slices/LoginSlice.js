import { createSlice } from '@reduxjs/toolkit';

// Initial states
const initialState = {
  login: {
    email: '',
    errorEmail: '',
    isErrorEmail: false,
    password: '',
    errorPassword: '',
    isErrorPassword: false,
    passwordHidden: true
  }
};

// Create a slice
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail(state, action) {
      state.login.email = action.payload;
    },

    setErrorEmail(state, action) {
      state.login.errorEmail = action.payload;
    },

    setIsErrorEmail(state, action) {
      state.login.isErrorEmail = action.payload;
    },

    setPassword(state, action) {
      state.login.password = action.payload;
    },

    setErrorPassword(state, action) {
      state.login.errorPassword = action.payload;
    },

    setIsErrorPassword(state, action) {
      state.login.isErrorPassword = action.payload;
    },

    togglePasswordVisibility(state) {
      state.login.passwordHidden = !state.login.passwordHidden;
    },
  },
});

// Export actions
export const {
  setEmail,
  setErrorEmail,
  setIsErrorEmail,
  setPassword,
  setErrorPassword,
  setIsErrorPassword,
  togglePasswordVisibility,
} = loginSlice.actions;

// Export reducer
export const loginReducer = loginSlice.reducer;

