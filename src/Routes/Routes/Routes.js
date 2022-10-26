import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Couses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Tutorial from "../../Pages/Tutorial/Tutorial";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/detail')
            },
            {
                path: '/tutorial',
                element: <Tutorial></Tutorial>,
                loader: () => fetch('http://localhost:5000/detail')
            },

            {
                path: '/details/:id',
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },

            {
                path: '/course/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/detail/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])