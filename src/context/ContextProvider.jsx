import {useContext, createContext, useEffect, useState} from "react";

const Context = createContext();


export const ContextProvider = ({children}) => {

    const [games, setGames] = useState({});
    const [gamesPageCount, setGamesPageCount] = useState(6);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/games?per_page=${gamesPageCount}`)
            .then(res => res.json())
            .then(res => {
                setIsLoading(load => !load);
                setGames(res)
            })
            .catch(err => console.log(err))
    }, [])

    const data = {
        games,
        isLoading,
        setIsLoading,
        gamesPageCount,
        setGamesPageCount
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export const getContext = () => useContext(Context);