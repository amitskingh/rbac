import "./App.css"

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import CreatePost from "./pages/CreatePost.jsx"
import CreateUser from "./pages/CreateUser.jsx"
import AllUsers from "./pages/AllUsers.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import MyPosts from "./pages/MyPosts.jsx"
import UnAuthorized from "./pages/UnAuthorized.jsx"
import NotFound from "./pages/NotFound.jsx"

import ProtectedRoute from "./routes/ProtectedRoute.jsx"
import AppLayout from "./pages/AppLayout.jsx"
import Test from "./Test.jsx"

const router = createBrowserRouter([
  // Landing Page Route
  { path: "/", element: <Home /> }, // Public landing page with a Login button

  // Login Page
  { path: "/login", element: <Login /> },

  // App Routes (Authenticated Area)
  {
    path: "/app",
    element: <AppLayout />, // Includes Navbar and other shared components for authenticated users
    children: [
      { index: true, element: <Navigate to="/app/all-posts" /> }, // Default route

      // Protected Routes (Require authentication)
      {
        path: "all-posts",
        element: (
          <ProtectedRoute allowedRoles={["admin", "moderator", "user"]}>
            <AllPosts />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-posts",
        element: (
          <ProtectedRoute allowedRoles={["moderator"]}>
            <MyPosts />
          </ProtectedRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AllUsers />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-user",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateUser />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-post",
        element: (
          <ProtectedRoute allowedRoles={["admin", "moderator"]}>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Unauthorized Route
  { path: "/unauthorized", element: <UnAuthorized /> },

  // 404 Route
  { path: "*", element: <NotFound /> },
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
