import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

// Define a type for the slice state
interface User {
    userInfo: {
        _id: string,
        name: string,
        email: string,
    },
}

// Define the initial state using that type
const initialState: User = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : {_id: 'no user', name: 'no user', email: 'no user'}
}

const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action) =>{
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) =>{
        state.userInfo = {
            _id: 'no user',
            name: 'no user',
            email: 'no user',
        };
        localStorage.removeItem('userInfo');

    }},
})

export const { setCredentials, logout } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default authSlice.reducer