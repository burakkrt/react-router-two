// Pages
import MainLayout from "../pages/index.jsx";
import Welcome from "../pages/Welcome.jsx";
import Error404 from "../pages/Error404.jsx";
import GamesLayout from "../pages/games/index.jsx";
import Players from "../pages/Players.jsx";
import Games from "../pages/Games.jsx";
import PrivateUser from "../auth/PrivateUser.jsx";
import PrivateAdmin from "../auth/PrivateAdmin.jsx";
import {createBrowserRouter} from "react-router-dom";

const router = [
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Welcome/>
            },
            {
                path: 'games',
                element: <GamesLayout/>,
                key: 12,
                children: [
                    {
                        index: true,
                        element: <Games/>
                    }
                ]
            },
            {
                path: 'players',
                element: <Players/>,
                authUser: true
            }
        ]
    }
];

const authMap = (router) => router.map(route => {
    if (route?.authUser) {
        route.element = <PrivateUser>{route.element}</PrivateUser>
    }
    if (route?.authAdmin) {
        route.element = <PrivateAdmin>{route.element}</PrivateAdmin>
    }
    if (route?.children) {
        route.children = authMap(route.children)
    }
    return route;
})

export default createBrowserRouter(authMap(router))