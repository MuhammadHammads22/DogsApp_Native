import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../Api/Auth";
import {loginReducer} from "../Slices/LoginSlice";
import { signupReducer } from "../Slices/SignupSlice";
import { postApis } from "../Api/Posts";
import { userInfoReducer } from "../Slices/UserSlice";
import createPostReducer from "../Slices/CreatePostSlice"




export const store=configureStore({
    reducer:{
      login:loginReducer,
      createPost:createPostReducer,
      signup:signupReducer,
      userInfo:userInfoReducer,
      [Api.reducerPath]:Api.reducer,
      [postApis.reducerPath]:postApis.reducer      
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware( { immutableCheck: false, // Disable immutable state checks
    serializableCheck: false}).concat( Api.middleware)
    .concat(postApis.middleware)   
})
// export const token=store.getState().userInfo.userInfo.accessToken
