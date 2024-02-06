import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    userInfo: 0
  },
  reducers: {
    increment: state => {
      state.userInfo += 1
    },

  }
})

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions

export default userSlice.reducer