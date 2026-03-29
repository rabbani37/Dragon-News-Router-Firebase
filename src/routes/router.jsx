import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthLauoyt from "../layouts/AuthLauoyt";
import Register from "../pages/Register";
import NewsDetails from "../components/NewsDetails";
import PriverRoute from "./PriverRoute";
import Loading from "../components/Loading";

import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLauoyt></AuthLauoyt>,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: "/auth/register",
        Component: Register
      }
    ]
  },
  {
    path: "/news-details/:Id",
    element: <PriverRoute><NewsDetails /></PriverRoute>,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <span className="loading loading-spinner loading-xl"></span>
  },
  {
    path: "/*",
    Component: ErrorPage ,
  },
]);

export default router;
