import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import clinicSlice from "../features/clinic/clinicSlice";
import { clinicApi } from "../services/clinicApi";
import { authApi } from "../services/authApi";
import authSlice from "../features/auth/authSlice";

const store = configureStore ({
    reducer: {
        clinic: clinicSlice,
        auth: authSlice,
        [clinicApi.reducerPath]: clinicApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(clinicApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);

export default store;