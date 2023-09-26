import { configureStore } from "@reduxjs/toolkit";
import clinicSlice from "../features/clinic/clinicSlice";
import { clinicApi } from "../services/clinicApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore ({
    reducer: {
        clinic: clinicSlice,
        [clinicApi.reducerPath]: clinicApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(clinicApi.middleware)
});

setupListeners(store.dispatch);

export default store;