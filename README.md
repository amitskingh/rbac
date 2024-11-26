---
# React RBAC Frontend with Mock Data

This is a role-based access control (RBAC) frontend application built with React and TailwindCSS. It uses mock data to simulate login functionality and `redux-persist` to persist the user information even after refresh. The application allows different roles `Admin`, `Moderator` and `User` to access specific features.
---

## Features

### Role-Based Access Control (RBAC)

- **Admin:**

  - View all posts.
  - Delete any posts
  - Manage users [Create, Delete, Edit]

- **Moderator:**

  - View all posts.
  - Manage personal posts [Delete, Edit].
  - Create new posts.

- **User:**
  - View all posts.

### Functionalities

- **Login:** Simulates user authentication using mock data.
- **Redux with `redux-persist`:** Stores user information locally for session persistence.
- **Role-Based Navigation:** Pages and actions are restricted based on user roles.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rbac.git
cd rbac
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

---

## Folder Structure

```

├── components/         # Reusable components like Navbar
├── pages/              # Application pages (Login, AllPosts, etc.)
├── routes/             # ProtectedRoute component for role-based access
├── redux/              # Redux setup
│   ├── slices/         # Redux slices for state management
│   └── store.js        # Redux store configuration
├── mock/               # Mock data and API functionality
│   ├── mockdata.js     # Mock data for users, posts, etc.
│   └── mockApi.js      # Mock API functions for login
├── App.jsx             # Main App component
└── index.js            # Application entry point

```

---

## Usage

### 1. Mock Login API

The mock login API simulates user authentication based on predefined user credentials.

**Example Mock Users (in `mockApi.js`):**

```javascript
export const mockUsers = [
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "moderator@example.com", password: "mod123", role: "moderator" },
  { email: "user@example.com", password: "user123", role: "user" },
]
```

**Example Login Function:**

```javascript
export const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const curUser = users.find((user) => user.email === email)
      if (!curUser) {
        reject("User not found")
      } else if (curUser.password !== password) {
        reject("Invalid password")
      } else {
        // Exclude the password from the resolved user object
        const { password, ...user } = curUser
        resolve({ user })
      }
    }, 1000)
  })
}
```

### 2. Redux State Management

The application uses Redux Toolkit for state management and `redux-persist` for persisting user information.

**Example User Slice (in `authSlice.js`):**

```javascript
import { createSlice, isAction } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { user } = action.payload
      //console.log(user)

      state.user = user
      state.isAuthenticated = true
    },

    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
```

---

## Role-Based Navigation

The `ProtectedRoute` component restricts access to pages based on roles. Example:

```javascript
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useSelector((state) => state.auth)

  // Check if user exists and has the appropriate role
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  // If the user is authorized, render the children components
  return children
}

export default ProtectedRoute
```

**Routing Example:**

```javascript
const router = createBrowserRouter([
  // Landing Page Route
  { path: "/", element: <Home /> }, // Public landing page

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
```

---

## Available Pages

### 1. Home

- **Path:** `/`
- **Overview:** Overview of RBAC.

### 2. Login

- **Path:** `/login`
- **Functionality:** Simulates login using mock data.

### 3. All Posts

- **Path:** `/app/all-posts`
- **Access:** Admin, Moderator, User.
- **Description:** Displays all posts.

### 4. My Posts

- **Path:** `/app/my-posts`
- **Access:** Moderator only.
- **Description:** Displays and manages posts created by the logged-in moderator.

### 5. Create Post

- **Path:** `/app/create-post`
- **Access:** Moderator.
- **Description:** Allows the creation of a new post.

### 6. All Users

- **Path:** `/app/all-users`
- **Access:** Admin only.
- **Description:** Displays and manages user accounts.

### 7. Create User

- **Path:** `/app/create-user`
- **Access:** Admin only.
- **Description:** Allows the admin to create a new user.

---

## Future Enhancements

1. Replace mock API with real backend integration.
2. Implement form error handling for better UX.
3. Add testing for component and state functionality.

---

## License

This project is licensed under the MIT License.

---
