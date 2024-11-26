import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  // notification: { message: "Take a break", type: "info" }, // Initial state
  notification: null, // Initial state
}

const notificationSlice = createSlice({
  name: "notification",
  initialState, // Use 'initialState' for defining the initial state
  reducers: {
    setNotification: (state, action) => {
      //console.log(action)

      state.notification = {
        message: action.payload.message,
        type: action.payload.type || "info", // 'success', 'error', etc.
      }
    },
    clearNotification: (state) => {
      state.notification = null // Reset to initial state
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
