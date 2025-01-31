import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),  //Inject endpoints to here from constants.js
});