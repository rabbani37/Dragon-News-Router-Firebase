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
import Loading2 from "../components/Loading2";
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
        hydrateFallbackElement: <Loading2></Loading2>
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
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    Component: ErrorPage ,
  },
]);

export default router;
