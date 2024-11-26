import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { clearNotification } from "../redux/slices/notificationSlice"
import { setNotification } from "../redux/slices/notificationSlice"

export default function Notifications({ notification }) {
  const dispatch = useDispatch()
  // setNotification({
  //   message: "Failed to delete the post.",
  //   type: "error",
  // })

  if (!notification) return null

  const { message, type } = notification

  return (
    <div
      className={`fixed bottom-4 right-4 p-4 rounded shadow-lg text-white ${
        type === "success"
          ? "bg-green-500"
          : type === "error"
          ? "bg-red-500"
          : "bg-blue-500"
      }`}
    >
      <p>{message}</p>
      <button
        onClick={() => dispatch(clearNotification())}
        className="mt-2 text-sm underline"
      >
        Dismiss
      </button>
    </div>
  )
}
