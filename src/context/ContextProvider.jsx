import {useContext, createContext, useEffect, useState} from "react";

const Context = createContext();


export const ContextProvider = ({children}) => {

    const [games, setGames] = useState({});
    const [gamesPageCount, setGamesPageCount] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [auth, setAuth] = useState(true);
    const [authAdmin, setAuthAdmin] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://www.balldontlie.io/api/v1/games?per_page=${gamesPageCount}&page=${currentPage}`)
            .then(res => res.json())
            .then(res => {
                setIsLoading(false);
                setGames(res)
            })
            .catch(err => console.log(err))
    }, [gamesPageCount, currentPage])


    const data = {
        games,
        isLoading,
        setIsLoading,
        gamesPageCount,
        setGamesPageCount,
        currentPage,
        setCurrentPage,
        auth,
        setAuth,
        authAdmin,
        setAuthAdmin
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export const getContext = () => useContext(Context);