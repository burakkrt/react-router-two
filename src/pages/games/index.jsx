import {Outlet} from "react-router-dom";
import Select from 'react-select'
import {getContext} from "../../context/ContextProvider.jsx";

const options = [
    {value: 6, label: '6'},
    {value: 14, label: '14'},
    {value: 18, label: '18'},
    {value: 24, label: '24'},
    {value: 30, label: '30'}
]

export default function GamesLayout() {

    const {
        gamesPageCount, setGamesPageCount
    } = getContext();

    return (
        <>
            <div className="flex flex-row justify-between mb-5">
                <label className="inline-block text-lg">
                    Games shown per page :
                    <Select options={options} className="inline-block ms-3 w-24" placeholder={gamesPageCount}
                            onChange={set => setGamesPageCount(15)}/>
                </label>
                <div>
                    <button className="bg-yellow-400 px-4 py-2 text-lg rounded">Prev</button>
                    <span className="mx-4 text-xl ">1</span>
                    <button className="bg-yellow-400 px-4 py-2 text-lg rounded">Next</button>
                </div>
            </div>
            <Outlet/>
        </>
    );

}