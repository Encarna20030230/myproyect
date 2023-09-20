
import { createBrowserRouter } from "react-router-dom";
import Porfolio from "../pages/Porfolio";
import Contact from "../pages/Contact";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "porfolio",
                element: <Porfolio />,

            },
            {
                path: "contact",
                element: <Contact />,


            },

        ]

    },

]);