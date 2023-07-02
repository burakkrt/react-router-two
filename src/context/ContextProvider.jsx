import {useContext, createContext, useEffect, useState} from "react";

const Context = createContext();


export const ContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(true);
    const [authAdmin, setAuthAdmin] = useState(true)

    // Games
    const [games, setGames] = useState({});
    const [gamesPageCount, setGamesPageCount] = useState(14);
    const [gamesCurrentPage, setGamesCurrentPage] = useState(1);

    // Players
    const [players, setPlayers] = useState({});
    const [playersPageCount, setPlayersPageCount] = useState(14);
    const [playersCurrentPage, setPlayersCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://www.balldontlie.io/api/v1/games?per_page=${gamesPageCount}&page=${gamesCurrentPage}`)
            .then(res => res.json())
            .then(res => {
                setIsLoading(false);
                setGames(res)
            })
            .catch(err => console.log(err))
    }, [gamesPageCount, gamesCurrentPage])

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://www.balldontlie.io/api/v1/players?per_page=${playersPageCount}&page=${playersCurrentPage}`)
            .then(res => res.json())
            .then(res => {
                setIsLoading(false);
                setPlayers(res)
            })
            .catch(err => console.log(err))
    }, [playersPageCount, playersCurrentPage])


    const data = {
        games,
        isLoading,
        setIsLoading,
        gamesPageCount,
        setGamesPageCount,
        currentPage: gamesCurrentPage,
        setCurrentPage: setGamesCurrentPage,
        auth,
        setAuth,
        authAdmin,
        setAuthAdmin,
        players,
        setPlayers,
        playersPageCount,
        setPlayersPageCount,
        playersCurrentPage,
        setPlayersCurrentPage
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export const getContext = () => useContext(Context);