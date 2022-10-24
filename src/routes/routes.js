import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Error from "../pages/Error/Error";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, errorElement: <Error/>, children: [
        {path: '/', element: <Home/>},
        {path: '/courses', element: <Courses/>},
        {path: '/blog', element: <Blog/>},
        {path: '/faq', element: <Faq/>},
        {path: '/login', element: <Login/>}
    ]}
])