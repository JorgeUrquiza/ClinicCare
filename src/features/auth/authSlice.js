import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    localId: null,
    imageCamara: null,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // console.log(action.payload.data.email)
            return {
                user: action.payload.email, //Sacamos el data.
                token: action.payload.idToken,
                localId: action.payload.localId,
            }
        },
        clearUser: () => {
            return {
                user: null,
                token: null,
            }
        },
        setCamaraImage: (state, action) => {
            return {
                ...state,
                imageCamara: action.payload,
            }
        }
    },
});

export const { setUser, clearUser, setCamaraImage } = authSlice.actions;

export default authSlice.reducer;