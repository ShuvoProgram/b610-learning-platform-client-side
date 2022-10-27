import { createBrowserRouter } from "react-router-dom";
import CoursesCard from "../component/CoursesCard/CoursesCard";
import Blog from "../pages/Blog/Blog";
import CheckOut from "../pages/CheckOut/CheckOut";
import Courses from "../pages/Courses/Courses";
import CoursesDetails from "../pages/CoursesDetails/CoursesDetails";
import Error from "../pages/Error/Error";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/categories",
        element: <Courses />,
        loader: () => fetch(`http://localhost:5000/categories/`),
         children: [
             {
               path: "/categories/:Category_id",
               element: <CoursesCard />,
               loader: ({ params }) =>
                   fetch(`http://localhost:5000/categories/${params.Category_id}`),
             },
        ]
      },
      {
        path: "/courses/:id",
        element: <CoursesDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: '/blog',
        element: <Blog/>
      },
    {
        path: '/login', element: <Login/>
    },
    {
        path: '/register', element: <Register/>
    },
    {
        path: '/faq', element: <Faq/>
    },
    {
      path: '/checkout', element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
    }
],
  },
]);

// http://localhost:5000/courses/1
// http://localhost:5000/courses/${id}
// http://localhost:5000/categories/1
// http://localhost:5000/categories/${Category_id}
