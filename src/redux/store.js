import { configureStore } from '@reduxjs/toolkit'
import LoggingReducer from './logging/LoggingSlice'
import UserReducer from './user/UserSlice'

export const store = configureStore({
  reducer: {
        loggedin: LoggingReducer,
        loginout: UserReducer,
    },
})
