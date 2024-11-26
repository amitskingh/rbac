import { createSlice, isAction } from "@reduxjs/toolkit"

const temp = {
  id: 0,
  name: "Naruto",
  email: "naruto@gmail.com",
  role: "moderator",
  password: "naruto",
}

const initialState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload
      console.log(user)

      state.user = user
      state.isAuthenticated = true
    },

    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
