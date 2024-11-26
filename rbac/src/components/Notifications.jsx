import { clearNotification } from "../redux/slices/notificationSlice"
import { useDispatch, useSelector } from "react-redux"

const Notifications = () => {
  const dispatch = useDispatch()

  const { notification } = useSelector((state) => state.notification) // Single notification

  if (!notification) {
    return null
  }

  //console.log(notification)

  //console.log(notification.message, notification.type)

  return (
    <div className="flex justify-center">
      <div className="fixed top-4 space-y-4 z-50">
        <div
          className={`flex items-center justify-between w-auto p-4 rounded-lg shadow-lg transition-all ${
            notification.type === "info"
              ? "bg-blue-100 text-blue-800"
              : notification.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <p className="text-sm font-medium">{notification.message}</p>
          <button
            onClick={() => dispatch(clearNotification())}
            className="ml-4 text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notifications
