import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../Api/Auth";
import {loginReducer} from "../Slices/LoginSlice";
import { signupReducer } from "../Slices/SignupSlice";





export const store=configureStore({
    reducer:{
      login:loginReducer,
      signup:signupReducer,
      [Api.reducerPath]:Api.reducer      
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware( { immutableCheck: false, // Disable immutable state checks
    serializableCheck: false}).concat( Api.middleware)       
})