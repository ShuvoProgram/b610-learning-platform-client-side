import { createBrowserRouter } from "react-router-dom";
import CoursesCard from "../component/CoursesCard/CoursesCard";
import SideNav from "../component/SideNav/SideNav";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Error from "../pages/Error/Error";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Main from "../pages/Layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, errorElement: <Error/>, children: [
        {path: '/', element: <Home/>},
        { path: '/courses',
         element: <Courses />,
        loader: () => fetch('http://localhost:5000/category')
        },
        {path:'/courses',
         element: <SideNav />,
        loader: () => fetch(`http://localhost:5000/courses/`) },
        { path: '/course', element: <CoursesCard />, loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.Category_id}`)},
        {path: '/blog', element: <Blog/>},
        {path: '/faq', element: <Faq/>},
        {path: '/login', element: <Login/>},
        { path: '/register', element: <Register/>}
    ]}
])