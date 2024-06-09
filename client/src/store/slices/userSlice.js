import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import userService from "../../services/userService.js";

const initialState = {
    user: null,
    allUsers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getUser = createAsyncThunk(
    'user/getUser',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token
            return await userService.getUser(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getAllUsers = createAsyncThunk(
    'user/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token
            return await userService.getAllUsers(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allUsers = action.payload
            })
    },
})


export const {resetUser} = userSlice.actions
export default userSlice.reducer
