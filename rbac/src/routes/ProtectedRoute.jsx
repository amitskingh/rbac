import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useSelector((state) => state.auth)

  console.log("User from routes: ", user)

  // Check if user exists and has the appropriate role
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  // If the user is authorized, render the children components
  return children
}

export default ProtectedRoute
