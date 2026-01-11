import { Link, NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex bg-white">

      {/* ==== LEFT SIDEBAR MENU ==== */}
      <div className="w-64 bg-gray-100 border-r hidden md:block fixed h-full">
        <NavLink to='/'><h2 className="text-xl font-bold p-5 border-b">Dashboard Menu</h2></NavLink>

        <nav className="flex flex-col p-3 space-y-2">

          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-semibold 
              ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="my-issues"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-semibold 
              ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`
            }
          >
            My Issues
          </NavLink>

          <NavLink
            to="user-management"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-semibold 
              ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`
            }
          >
            User Management
          </NavLink>

          <NavLink
            to="report-issue"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-semibold 
              ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`
            }
          >
            Report Issue
          </NavLink>

          <NavLink
            to="profile"
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-semibold 
              ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`
            }
          >
            Profile
          </NavLink>

        </nav>
      </div>

      {/* ==== RIGHT CONTENT AREA ==== */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">

          {/* Mobile menu buttons (optional) */}
          <div className="md:hidden flex flex-col mb-4">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="my-issues">My Issues</NavLink>
            <NavLink to="report-issue">Report Issue</NavLink>
            <NavLink to="profile">Profile</NavLink>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
