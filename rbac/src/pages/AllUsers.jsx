import React from "react"
import { FaEdit, FaTrash, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { allUsers } from "../mock/mockData"
import Notifications from "../components/Notifications"
import { useDispatch, useSelector } from "react-redux"
import { setNotification } from "../redux/slices/notificationSlice"

export default function AllUsers() {
  const dispatch = useDispatch()

  const handleDeleteUser = async () => {
    try {
      // Simulate success
      dispatch(
        setNotification({
          message: "User removed successfully!",
          type: "success",
        })
      )
    } catch (error) {
      // Handle error
      dispatch(
        setNotification({
          message: "Failed to delete remove the user.",
          type: "error",
        })
      )
    }
  }

  return (
    <center>
      <div className="max-w-4xl p-6  min-h-screen">
        <h1 className="text-2xl font-semibold mb-4">All Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allUsers.map((user) => (
            <div
              key={user.id}
              className="max-w-sm bg-white shadow-lg rounded-lg p-4 flex flex-col items-start space-y-2 border border-gray-200"
            >
              {/* User Icon and Name */}
              <div className="flex items-center space-x-3">
                <FaUserCircle className="text-gray-500 text-4xl" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>

              {/* Permissions Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {user.permissions.map((permission, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-600"
                  >
                    {permission}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mt-4 self-end">
                <Link
                  className="p-2 bg-yellow-100 text-yellow-600 rounded-full hover:bg-yellow-200"
                  aria-label="Edit"
                >
                  <FaEdit />
                </Link>
                <button
                  onClick={() => handleDeleteUser()}
                  className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                  aria-label="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Notifications />
    </center>
  )
}
