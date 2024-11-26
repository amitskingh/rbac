import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { myPosts } from "../mock/mockData"
import { setNotification } from "../redux/slices/notificationSlice"

import Notifications from "../components/Notifications"

export default function MyPosts() {
  const dispatch = useDispatch()

  const handleDeletePost = async () => {
    try {
      // Simulate success
      dispatch(
        setNotification({
          message: "Post deleted successfully!",
          type: "success",
        })
      )
    } catch (error) {
      // Handle error
      dispatch(
        setNotification({
          message: "Failed to delete the post.",
          type: "error",
        })
      )
    }
  }

  return (
    <>
      <Notifications />
      <center>
        <div className="p-6 max-w-5xl min-h-screen">
          <h1 className="text-2xl font-semibold mb-6">All Posts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {myPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col space-y-4"
              >
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h2>

                {/* Content */}
                <p className="text-sm text-gray-600">{post.content}</p>

                {/* Action Icons */}
                <div className="flex justify-end space-x-3 mt-auto">
                  <button
                    className="p-2 bg-yellow-100 text-yellow-600 rounded-full hover:bg-yellow-200"
                    aria-label="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={handleDeletePost}
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
      </center>
    </>
  )
}
