import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../Layout/Main";
import Cart from "../pages/cart";
import TopReted from "../pages/TopReted";
import WhistList from "../pages/WhistList";

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
            },
            {
                path:"/topreted",
                element:<TopReted/>
            },
            {
                path:"/whistlist",
                element:<WhistList/>
            }
        ]
    }
])