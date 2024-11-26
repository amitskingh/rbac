import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Outlet /> {/* Renders the child routes */}
      </div>
    </div>
  )
}

export default AppLayout
