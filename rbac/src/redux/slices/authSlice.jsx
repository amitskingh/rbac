import { createSlice, isAction } from "@reduxjs/toolkit"

const initialState = {
  user: {
    id: 0,
    name: "Naruto",
    email: "naruto@gmail.com",
    role: "admin",
    password: "naruto",
  },
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload
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
