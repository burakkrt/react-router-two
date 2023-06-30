import {useContext, createContext, useEffect, useState} from "react";

const Context = createContext();


export const ContextProvider = ({children}) => {

    const [games, setGames] = useState({});

    useEffect(() => {
        fetch('https://www.balldontlie.io/api/v1/games')
            .then(res => res.json())
            .then(res => setGames(res))
            .catch(err => console.log(err))
    }, [])

    const data = {
        games,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
};

export const getContext = () => useContext(Context);