import { configureStore } from "@reduxjs/toolkit";
import clinicSlice from "../features/clinic/clinicSlice";

export const store = configureStore ({
    reducer: {
        clinic: clinicSlice,
    },
});