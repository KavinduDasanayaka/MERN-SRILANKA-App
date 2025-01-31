import { apiSlice } from "./apiSlice";
import { LOCATION_URL,UPLOAD_URL } from "../constants";

export const locationslice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLocations: builder.query({
      query: () => `${LOCATION_URL}/all-locations`,
    }),
    createLocation: builder.mutation({
      query: (newLocation) => ({
        url: `${LOCATION_URL}/create-location`,
        method: "POST",
        body: newLocation,
      }),
    }),

    addLocationReview: builder.mutation({
      query: ({ id, rating, comment }) => ({
        url: `${LOCATION_URL}/${id}/reviews`,
        method: "POST",
        body: { rating, id, comment },
      }),
    }),

    uploadImage: builder.mutation({
      query: (formData) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: formData,
      }),
    }),

    getSpecificLocation: builder.query({
      query: (id) => `${LOCATION_URL}/specific-location/${id}`,
    }),

  }),
});

export const {
  useGetAllLocationsQuery,
  useCreateLocationMutation,
  useAddLocationReviewMutation,
  useUploadImageMutation,
  useGetSpecificLocationQuery,


} = locationslice;















