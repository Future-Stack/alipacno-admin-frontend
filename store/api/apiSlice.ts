import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { BASE_URL } from "./baseApi";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

export default apiSlice;
