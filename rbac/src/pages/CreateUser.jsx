/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState } from "react"

const permissions = {
  admin: {
    badges: ["Full Control"],
  },
  moderator: {
    badges: ["Read", "Write", "View"],
  },
  user: {
    badges: ["View"],
  },
}

function assignBadge() {}

export default function Example() {
  const [Role, setRole] = useState("user")
  console.log(permissions[Role])
  //   console.log(permissions[Role].badges)
  //   permissions[Role].badges.forEach((element) => {
  //     console.log(element)
  //   })

  return (
    <div className="flex justify-center">
      <form className="mt-12 min-h-screen">
        <div className="space-y-3 outline outline-indigo-50 p-6 rounded shadow">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7 font-semibold text-gray-900">
              User Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              Fill the details and assign roles carefully.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="role"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Role
                </label>
                <div className="mt-2">
                  <select
                    onChange={(e) => setRole(e.target.value.toLowerCase())}
                    id="role"
                    name="role"
                    autoComplete="role-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                  >
                    <option>User</option>
                    <option>Moderator</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>

              {/* ----------------Permissions---------------- */}

              <div className="sm:col-span-3">
                <p
                  htmlFor="role"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Permissions
                </p>
                <div className="mt-2 flex flex-wrap">
                  {permissions[Role].badges.map((badge) => {
                    console.log("Badge:", badge)

                    return (
                      <span className="mr-1 items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                        {badge}
                      </span>
                    )
                  })}
                </div>
              </div>
              {/* -------------------------------- */}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
