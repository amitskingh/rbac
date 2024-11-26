import { useDispatch, useSelector } from "react-redux"
import { clearNotification } from "./src/redux/slices/notificationSlice"
import { setNotification } from "./src/redux/slices/notificationSlice"

export default function Notifications() {
  const dispatch = useDispatch()
  setNotification({
    message: "Failed to delete the post.",
    type: "error",
  })

  const notification = useSelector((state) => state.notification) // Single notification

  console.log(notification)

  const { message, type } = { message: "Great", type: "success" }

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
