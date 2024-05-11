// import { createSlice } from '@reduxjs/toolkit';
// // import persistReducer from 'redux-persist/es/persistReducer';

// import AsyncStorage from '@react-native-async-storage/async-storage';

// // sensitive
// // import persistCombineReducers from 'redux-persist/es/persistCombineReducers';
// // import createSensitiveStorage from "redux-persist-sensitive-storage";

// // reduxpersist lib
// import { Api } from '../Api/Auth';


// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: "666",
//     userName: "hg",
//   },
//   reducers: {
//     setTokenAndName(state,action) {
//         state.token = action.payload;
//         state.userName = action.payload;
//       },
//     clearTokenAndName(state) {
//       state.token = null;
//       state.userName = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       Api.endpoints.login.matchFulfilled,
//       (state, { payload }) => {
//         state.token = payload.token
//         state.userName = payload.user
//       },
//     )
//   },

// });

// // sensitive===================================================================
// // const storage = createSensitiveStorage({
// //   keychainService: "myKeychain",
// //   sharedPreferencesName: "mySharedPrefs"
// // });

// // const persistConfig = {
// //     key: 'root',
// //     storage,
// //   }
   
// // export const persistedReducer = persistCombineReducers(persistConfig, authSlice.reducer)
// // sensitive=======================================================================
// // persist lib=====================

     



// export const { setTokenAndName,clearTokenAndName } = authSlice.actions;
// export default authSlice.reducer
