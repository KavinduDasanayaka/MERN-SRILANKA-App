import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  endpoints: () => ({}),  //Inject endpoints to here from constants.js
});