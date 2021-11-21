import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const LoggingSlice = createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        setLogggedInTrue: (state) => {
            state.value = true
        },
        setLogggedInFalse: (state) => {
            state.value = false
        },
    }
})

export const { setLogggedInFalse, setLogggedInTrue } = LoggingSlice.actions;

export default LoggingSlice.reducer

