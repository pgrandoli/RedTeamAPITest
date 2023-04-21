import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isScuccess: false,
    isLoading: false,
    message: ''
};

//Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try{
        return await authService.register(user);
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isScuccess = false;
            state.message = '';
        }
    },
        extraReducers: (builder) => {
            builder.addCase(register.pending, (state) => {
                state.isLoading = true;
            });
            builder.addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.user = action.payload.user;
            });
            builder.addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            });
        }
    })

    export const {reset} = authSlice.actions;
    export default authSlice.reducer;
