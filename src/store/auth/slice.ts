import {createSlice } from '@reduxjs/toolkit'
interface IAuth {
    id: number;
    userId: number;
    token: string;
    isLoading: boolean;
}
const initialState: IAuth  = {
        id: 0,
        userId: 0,
        token: '',
        isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const {token, id} = action.payload
            state.token = token
            state.userId = id
        },
        logOut(state) {
            localStorage.removeItem('userData')
            state.token = ''
            state.userId = 0
        },
        startLoading(state){
            state.isLoading = true
        },
        stopLoading(state){
            state.isLoading = false
        }
    },
})




export const { login, logOut, startLoading, stopLoading } = authSlice.actions

export const auth = authSlice.reducer