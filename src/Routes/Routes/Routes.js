import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Couses/Courses";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
])