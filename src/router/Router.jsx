import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AllServices from "../pages/AllServices";
import ErrorPage from "../pages/ErrorPage";
import AddService from "../pages/AddService";


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
                element: <AddService></AddService>
            }

        ]
    }
])

export default router