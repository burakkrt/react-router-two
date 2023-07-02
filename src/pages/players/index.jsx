import {Outlet} from "react-router-dom";
import Select from 'react-select'
import {getContext} from "../../context/ContextProvider.jsx";
import {useEffect} from "react";

const options = [
    {value: 6, label: '6'},
    {value: 14, label: '14'},
    {value: 18, label: '18'},
    {value: 24, label: '24'},
    {value: 30, label: '30'}
]

export default function PlayersLayout() {

    const {
        players, playersPageCount, setPlayersPageCount, playersCurrentPage, setPlayersCurrentPage
    } = getContext();

    function setPerCountHandler(e) {
        setPlayersPageCount(e.value)
    }

    function prevGamesHandler() {
        if (playersCurrentPage > 1) setPlayersCurrentPage(prevCurrentPage => prevCurrentPage - 1);
    }

    function nextGamesHandler() {
        if (players.meta.total_pages > playersCurrentPage) setPlayersCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    }

    function filterScrollHandler() {
        if (window.scrollY >= 170) {
            document.querySelector('#filter2').classList.add('bg-slate-800', 'p-5', 'text-slate-100', 'border-b-4')
        } else if (document.querySelector('#filter2').getAttribute('class').includes('bg-slate-800')) {
            document.querySelector('#filter2').classList.remove('bg-slate-800', 'p-5', 'text-slate-100', 'border-b-4')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', filterScrollHandler)
        return () => {
            window.removeEventListener('scroll', filterScrollHandler);
        }
    }, [])

    if (window.scrollY > 200) {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className="flex flex-row justify-between mb-5 sticky top-0 z-10 duration-500" id="filter2"
            >
                <label className="inline-block text-lg">
                    Players shown per page :
                    <Select options={options} className="inline-block ms-3 w-24 text-slate-800"
                            placeholder={playersPageCount}
                            onChange={setPerCountHandler}/>
                </label>
                <div>
                    <button
                        className={`bg-yellow-400 px-4 py-2 text-lg rounded text-slate-800 ${playersCurrentPage === 1 && "cursor-no-drop"}`}
                        onClick={prevGamesHandler}>Prev
                    </button>
                    <span className="mx-4 text-xl ">{playersCurrentPage}</span>
                    <button className="bg-yellow-400 px-4 py-2 text-lg rounded text-slate-800"
                            onClick={nextGamesHandler}>Next
                    </button>
                </div>
            </div>
            <Outlet/>
        </>
    );

}