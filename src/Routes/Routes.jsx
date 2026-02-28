import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Componets/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AllIssues from "../Pages/allIssues";
import PrivateRoute from "./PrivateRoute";
import DetelsPage from "../Pages/DetelsPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardHome from "../DashboardLayout/DashboardHome";
import MyIssues from "../DashboardLayout/MyIssues";
import ReportIssue from "../DashboardLayout/ReportIssue";
import Profile from "../DashboardLayout/Profile";
import UserManagement from "../DashboardLayout/UserManagement";
import Staff from "../Componets/pages/Staff";
import ApprovedStaff from "../DashboardLayout/ApprovedStaff";
import Allissues from "../DashboardLayout/Allissues";
import ManageUsers from "../DashboardLayout/ManageUsers";
import AdminRole from "../Componets/Hook/AdminRole";
import AssignedIssues from "../DashboardLayout/AssignedIssues";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch(
            "https://public-infrastructure-reporting.vercel.app/latest-issus",
          ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/all-Issues",
        Component: AllIssues,
      },

      {
        path: "/detels-page/:id",
        element: (
          <PrivateRoute>
            <DetelsPage></DetelsPage>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://public-infrastructure-reporting.vercel.app/latest-issus",
          ),
      },
      {
        path: "/staff",
        element: (
          <PrivateRoute>
            <Staff></Staff>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        Component: DashboardHome, // Dashboard main page
      },
      {
        path: "my-issues",
        Component: MyIssues,
      },
      {
        path: "citizen-management",
        // Component: UserManagement,
        element: (
          <AdminRole>
            <UserManagement></UserManagement>
          </AdminRole>
        ),
      },
      {
        path: "all-issues",
        // Component: Allissues,
        element: (
          <AdminRole>
            <Allissues></Allissues>
          </AdminRole>
        ),
      },
      {
        path: "manage-users",
        // Component: ManageUsers,
        element: (
          <AdminRole>
            <ManageUsers></ManageUsers>
          </AdminRole>
        ),
      },
      {
        path: "report-issue",
        Component: ReportIssue,
      },
      {
        path: "assigned-issues",
        Component: AssignedIssues,
      },

      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "staff-management",
        Component: ApprovedStaff,
      },
    ],
  },
]);
