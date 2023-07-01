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
        games, gamesPageCount, setGamesPageCount, currentPage, setCurrentPage
    } = getContext();

    function setPerCountHandler(e) {
        setGamesPageCount(e.value)
    }

    function prevGamesHandler() {
        if (currentPage > 1) setCurrentPage(prevCurrentPage => prevCurrentPage - 1);
        console.log(currentPage)
    }

    function nextGamesHandler() {
        if (games.meta.total_pages > currentPage) setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY >= 170) {
            document.querySelector('#filter').classList.add('bg-slate-800', 'p-5', 'text-slate-100', 'border-b-4')
        } else if (document.querySelector('#filter').getAttribute('class').includes('bg-slate-800')) {
            document.querySelector('#filter').classList.remove('bg-slate-800', 'p-5', 'text-slate-100', 'border-b-4')
        }
    })


    return (
        <>
            <div className="flex flex-row justify-between mb-5 sticky top-0 z-10 duration-500" id="filter"
            >
                <label className="inline-block text-lg">
                    Games shown per page :
                    <Select options={options} className="inline-block ms-3 w-24 text-slate-800"
                            placeholder={gamesPageCount}
                            onChange={setPerCountHandler}/>
                </label>
                <div>
                    <button
                        className={`bg-yellow-400 px-4 py-2 text-lg rounded text-slate-800 ${currentPage === 1 && "cursor-no-drop"}`}
                        onClick={prevGamesHandler}>Prev
                    </button>
                    <span className="mx-4 text-xl ">{currentPage}</span>
                    <button className="bg-yellow-400 px-4 py-2 text-lg rounded text-slate-800"
                            onClick={nextGamesHandler}>Next
                    </button>
                </div>
            </div>
            <Outlet/>
        </>
    );

}