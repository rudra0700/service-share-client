import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllServices from "../pages/AllServices";
import ErrorPage from "../pages/ErrorPage";
import AddService from "../pages/AddService";
import ManageServices from "../pages/ManageServices";
import UpdateService from "../pages/UpdateService";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ServiceBookForm from "../pages/ServiceBookForm";
import BookedService from "../pages/BookedService";
import ServiceToDo from "../pages/ServiceToDo";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/manageServices',
                element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
            },
            {
                path: '/updateService/:id',
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/serviceBookingForm/:id',
                element: <PrivateRoute><ServiceBookForm></ServiceBookForm></PrivateRoute>
            },
            {
                path: '/bookedService',
                element: <PrivateRoute><BookedService></BookedService></PrivateRoute>
            },
            {
                path: '/serviceToDo',
                element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
            }

        ]
    }
])

export default router