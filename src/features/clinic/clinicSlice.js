import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories";
import allPatients from "../../data/patients";

const initialState = {
    categories: dataCategories,
    patients: allPatients,
    patientsFilteredByCategory: [],
    categorySelected: null,
    patientSelected: null,
}

export const clinicSlice = createSlice({ 
    name: 'clinic',
    initialState,
    reducers: { 
        setCategorySelected: () => { 

        },
        setPatientSelected: (state, action) => { 

        },
    }
})

export const { setCategorySelected, setPatientSelected } = clinicSlice.actions

export default clinicSlice.reducer