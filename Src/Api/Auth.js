// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl:'http://10.0.2.2:8000/user/' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: 'login/',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json',
        }
      }),
    }),
    signUp: builder.mutation({
      query:(body) => ({
        url: 'register/',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json',
        }
      })
    })
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useSignUpMutation,useLoginMutation } = Api