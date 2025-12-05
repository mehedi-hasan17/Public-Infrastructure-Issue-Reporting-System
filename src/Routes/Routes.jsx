import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Componets/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<NotFound></NotFound>,
    children:[
        {
          index: true,
          Component: Home
        },
      ],
  },
  
]);