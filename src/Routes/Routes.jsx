import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../Componets/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AllIssues from "../Pages/allIssues";
import Contact from "../Pages/Contact";
import AboutUs from "../Pages/AboutUs";
import PrivateRoute from "./PrivateRoute";
import DetelsPage from "../Pages/DetelsPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardHome from "../DashboardLayout/DashboardHome";
import MyIssues from "../DashboardLayout/MyIssues";
import ReportIssue from "../DashboardLayout/ReportIssue";
import Profile from "../DashboardLayout/Profile";
import UserManagement from "../DashboardLayout/UserManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/latest-issus"),
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
        loader: () => fetch("http://localhost:3000/latest-issus"),
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about-Us",
        Component: AboutUs,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>
    ),
    children: [
      {
       path: '/dashboard',
        Component: DashboardHome, // Dashboard main page
      },
      {
        path: "my-issues",
        Component: MyIssues,
      },
      {
        path: "user-management",
        Component: UserManagement,
      },
      {
        path: "report-issue",
        Component: ReportIssue,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
]);
