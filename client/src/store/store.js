import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import userReducer from "./slices/userSlice.js";
import moodReportReducer from "./slices/moodReportSlice.js";

export const store = configureStore(
    {
        reducer: {
            auth: authReducer,
            user: userReducer,
            report: moodReportReducer,
        }
    }
)
