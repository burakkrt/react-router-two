import {createBrowserRouter} from "react-router-dom";
// Pages
import MainLayout from "../pages/index.jsx";
import Main from "../pages/Main.jsx";
import Error404 from "../pages/Error404.jsx";
import GamesLayout from "../pages/games/index.jsx";
import Players from "../pages/Players.jsx";
import Games from "../pages/Games.jsx";

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
                element: <GamesLayout/>,
                children: [
                    {
                        index: true,
                        element: <Games/>
                    },
                ]
            },
            {
                path: 'players',
                element: <Players/>
            }
        ]
    }
])