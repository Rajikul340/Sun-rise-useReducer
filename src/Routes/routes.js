import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Cart from "../pages/cart";

export const  routers = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children: [
            {
                path:"/",
                element:<Home/>,
                
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])