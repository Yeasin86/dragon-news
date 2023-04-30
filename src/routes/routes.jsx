import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/News Layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginPage from "../layouts/LoginPage/LoginPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthRequired from "./AuthRequired/AuthRequired";
import Terms from "../shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-yeasin86.vercel.app/categories/${params.id}`),
      },
    ],
  },

  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <AuthRequired><News></News></AuthRequired>,
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-yeasin86.vercel.app/news/${params.id}`),
      },
    ],
  },
]);

export default router;
