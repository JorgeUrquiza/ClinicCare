import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../firebase';

export const clinicApi = createApi({
    reducerPath: 'clinicApi',
    baseQuery: fetchBaseQuery({baseUrl}), // 'https://cliniccare-94406-default-rtdb.firebaseio.com/'
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getPatients: builder.query({
            query: () => 'patients.json',
        }),
        getPatientsByCategory: builder.query({
            query: category => `patients.json?orderBy="category"&equalTo="${category}"`,
        }),
        getProfileImage: builder.query({ 
            query: localId => `profileImages/${localId}.json`, 
        }),
        postProfileImage: builder.mutation ({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {image},
            }),
        }),
        addPatient: builder.mutation({ // Agregar pacientes nuevo metodo
            query: (newPatient) => ({
                url: 'patients.json',
                method: 'POST',
                body: newPatient,
            })
        })
    }),
});

export const { 
    useGetCategoriesQuery, 
    useGetPatientsQuery, 
    useGetPatientsByCategoryQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation,
    useAddPatientMutation,
} = clinicApi;