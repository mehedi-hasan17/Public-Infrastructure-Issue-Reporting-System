import { NavLink, Outlet } from "react-router";
import UserRole from "../Componets/Hook/UserRole";

const DashboardLayout = () => {
  const { role, isBlocked } = UserRole();

  console.log("User Role in DashboardLayout:", role);

  const linkClass = ({ isActive }) =>
    `px-4 py-3 rounded-lg text-sm font-semibold 
    ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-200"}`;

  return (
    <div className="relative min-h-screen md:flex bg-white">
      {/* ===== LEFT SIDEBAR ===== */}
      <div className="w-64 bg-gray-100 border-r hidden md:block fixed h-full">
        <NavLink to="/">
          <h2 className="text-xl font-bold p-5 border-b">Dashboard Menu</h2>
        </NavLink>

        <nav className="flex flex-col p-3 space-y-2">
          {/* COMMON */}
          <NavLink to="/dashboard" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/staff-management" className={linkClass}>
            Staff Management
          </NavLink>

          {/* ===== CITIZEN MENU ===== */}
          {role === "citizen" && (
            <>
              <NavLink to="my-issues" className={linkClass}>
                My Issues
              </NavLink>

              {!isBlocked && (
                <NavLink to="report-issue" className={linkClass}>
                  Report Issue
                </NavLink>
              )}
            </>
          )}

          {/* ===== STAFF MENU ===== */}
          {role === "staff" && (
            <NavLink to="assigned-issues" className={linkClass}>
              Assigned Issues
            </NavLink>
          )}
          {
            role === "admin" && (
              <NavLink to="all-issues" className={linkClass}>
                All Issues
              </NavLink>
              )
          }
          {
            role === "admin" && (
              <NavLink to="manage-users" className={linkClass}>
                Manage Users
              </NavLink>
              )
          }

          {/* ===== ADMIN MENU ===== */}
          {role === "admin" && (
            <NavLink to="citizen-management" className={linkClass}>
              citizen Management
            </NavLink>
          )}

          {/* COMMON */}
          <NavLink to="profile" className={linkClass}>
            Profile
          </NavLink>
        </nav>

        {/* BLOCKED WARNING */}
        {isBlocked && (
          <div className="m-3 p-3 text-sm bg-red-100 text-red-600 rounded">
            You are blocked. Please contact authorities.
          </div>
        )}
      </div>

      {/* ===== RIGHT CONTENT ===== */}
      <div className="flex-1 md:ml-64 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
