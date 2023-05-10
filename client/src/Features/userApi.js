import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    endpoints: (builder) => ({
        registrationUser: builder.mutation({
            query: (body) => ({
                url: `/registration`,
                method: "POST",
                body,
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                
                },
              }),
        })

    })
})


export const {
   useRegistrationUserMutation
  } = userApi;