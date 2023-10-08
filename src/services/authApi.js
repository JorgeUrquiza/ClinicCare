import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { apiKey, AuthUrl } from "../firebase";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: AuthUrl }),
    endpoints: (builder) => ({
        singUp: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
        login: builder.mutation({
            query: ({ ...auth }) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: 'POST',
                body: auth,
            }),
        }),
    }),
});

export const { useSingUpMutation, useLoginMutation } = authApi;
