import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../interfaces/interfaces'
interface UserState {
   user:User|null
}
const initialState: UserState = {
  user:null
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    initializeUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
        state.user = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const {initializeUser,clearUser} =userSlice.actions

export default userSlice.reducer