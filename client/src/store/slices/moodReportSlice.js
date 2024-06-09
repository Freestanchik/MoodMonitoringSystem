import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import moodReportService from "../../services/moodReportService.js";

const initialState = {
    moodReports: [],
    predictions: [],
    employeeReports: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getAllReports = createAsyncThunk(
    'reports/getAll',
    async (_, thunkAPI) => {
        try {
            return await moodReportService.getAllReports()
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

export const getReportByOwnerId = createAsyncThunk(
    'reports/getByOwnerId',
    async ({ownerId}, thunkAPI) => {
        try {
            return await moodReportService.getReportByOwnerId(ownerId)
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

export const createReport = createAsyncThunk(
    'reports/create',
    async (reportData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.token
            return await moodReportService.createReport(reportData, token)
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


export const moodReportSlice = createSlice({
    name: 'moodReport',
    initialState,
    reducers: {
        resetMoodReports: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllReports.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllReports.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.moodReports = action.payload.reports;
                state.predictions = action.payload.predictions;
            })
            .addCase(getAllReports.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getReportByOwnerId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getReportByOwnerId.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                console.log(action.payload)
                state.employeeReports = action.payload;
            })
            .addCase(getReportByOwnerId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createReport.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createReport.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employeeReports.unshift(action.payload)
            })
            .addCase(createReport.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const {resetMoodReports} = moodReportSlice.actions
export default moodReportSlice.reducer
