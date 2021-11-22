import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        id : "User1",
        birth : 980101,
        department : "시각영상디자인학과",
        id_del : false,
        is_men : false,
        level : 0,
        name : "정다희1",
        nickname : "다희짱!!..1",
        password : '1234',
        stu_num : '20174301',
        school_id : 1,
    }
}

export const  UserSlice =  createSlice({
    name: 'loggedin',
    initialState,
    reducers: {
        LogIn:  (state, action) => {
            state.user = action.payload
        },
        LogOut: (state) => {
            state.user = null
        }
    }
})

export const { LogIn, LogOut } = UserSlice.actions;

export default UserSlice.reducer 