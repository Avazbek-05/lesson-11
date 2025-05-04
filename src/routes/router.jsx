import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Like from "../pages/like/like";
import Shop from "../pages/shop/shop";
import MainLayout from "../components/main-layout/mainLayout";
import NotFound from "../components/NotFound/NotFound";
export const router = createBrowserRouter([
 {
    path:'/',
    element:<MainLayout/>,
    children:[
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "/shop",
            element: <Shop/>,
          },
          {
            path: "/like",
            element: <Like/>,
          },
          {
            path: "*",
            element: <NotFound />,
          }
    ]
 }
]);
