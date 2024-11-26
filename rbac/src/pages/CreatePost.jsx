import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid"

export default function PostForm() {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      //addPost()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 max-w-lg mx-auto p-6 bg-white min-h-screen"
    >
      <div className="space-y-8 shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="border-b border-gray-300 pb-6">
          <h2 className="text-lg font-semibold text-gray-900">Create Post</h2>
          <p className="mt-2 text-sm text-gray-600">
            Share your thoughts and creativity.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Enter a title"
                autoComplete="off"
                className="w-full rounded-md border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Content Field */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-900"
            >
              Content
            </label>
            <div className="mt-2">
              <textarea
                id="content"
                name="content"
                rows={4}
                placeholder="Write your post content here..."
                className="w-full rounded-md border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-x-4 mt-6">
          <button
            type="reset"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  )
}
