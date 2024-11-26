import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: { message: "chill", type: "info" }, // No notification initially
  reducers: {
    setNotification: (state, action) => {
      console.log(action)

      return {
        message: action.payload.message,
        type: action.payload.type || "info", // 'success', 'error', etc.
      }
    },
    clearNotification: () => {
      return null // Reset the notification
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
