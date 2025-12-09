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
        element:  <PrivateRoute><DetelsPage></DetelsPage></PrivateRoute>,
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
]);
      