import {createBrowserRouter} from "react-router-dom";
// Pages
import MainLayout from "../pages/index.jsx";
import Main from "../pages/Main.jsx";
import Error404 from "../pages/Error404.jsx";
import Games from "../pages/Games.jsx";
import Players from "../pages/Players.jsx";

export const router = createBrowserRouter([
    {
        name: "Home",
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
            {
                path: 'games',
                element: <Games/>
            },
            {
                path: 'players',
                element: <Players/>
            }
        ]
    }
])