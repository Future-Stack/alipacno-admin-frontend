import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // Attach token from `auth` slice if available
    const token = (getState() as any).auth?.token;
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export default baseQuery;
