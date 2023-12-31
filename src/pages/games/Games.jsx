import SkeletonGameMatch from "../../components/SkeletonGameMatch.jsx";
import {getContext} from "../../context/ContextProvider.jsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, memo} from "react";
import LazyLoad from 'react-lazy-load';

function Games() {

    const {
        games, isLoading, gamesPageCount, setGamesPageCount, currentPage, setCurrentPage
    } = getContext();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({per_count: gamesPageCount.toString(), page: currentPage.toString()});
    }, [gamesPageCount, currentPage])

    useEffect(() => {
        if (searchParams.get('per_count') && searchParams.get('per_count') !== gamesPageCount.toString()) {
            setGamesPageCount(+searchParams.get('per_count'))
        }
        if (searchParams.get('page') && searchParams.get('page') !== currentPage.toString()) {
            setCurrentPage(+searchParams.get('page'))
        }

    }, [])


    if (isLoading) return <SkeletonGameMatch cards={gamesPageCount}/>
    else return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {games.data && games.data.map(game => (
                <LazyLoad height={250} threshold={0.25} key={game.id}>
                    <div className="bg-yellow-400">
                        <div className="bg-slate-800 text-slate-100 p-3">
                            <span className="me-5">Oyun no : {game.id}</span>
                            <h1 className="inline-block relative end-0">{game.home_team.full_name} <span
                                className="text-slate-400">({game.home_team_score})</span> - {game.visitor_team.full_name}
                                <span
                                    className="text-slate-400">({game.visitor_team_score})</span></h1>
                        </div>
                        <div className="flex justify-between items-center my-3 relative px-5 py-3">
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 start-1/2 top-1/2">
                                <img src="/assets/img/basketball.png" alt="basketball" style={{width: "95px"}}
                                     className="hidden md:block"/>
                            </div>
                            <div>
                                <p>{game.home_team_score > game.visitor_team_score ?
                                    <span className="text-green-600 font-bold">Winner</span> :
                                    <span className="text-red-600 font-bold">Loser</span>}</p>
                                <p>{game.home_team.full_name} (Home)</p>
                                <p>Team Id : {game.home_team.id}</p>
                                <p>Abbreviation : {game.home_team.abbreviation}</p>
                                <p>City : {game.home_team.city}</p>
                                <p>Division : {game.home_team.city}</p>
                            </div>
                            <div className="text-end">
                                <p>{game.visitor_team_score > game.home_team_score ?
                                    <span className="text-green-600 font-bold">Winner</span> :
                                    <span className="text-red-600 font-bold">Loser</span>}</p>
                                <p>{game.visitor_team.full_name} (Visitor) </p>
                                <p>Team Id : {game.visitor_team.id}</p>
                                <p>Abbreviation : {game.visitor_team.abbreviation}</p>
                                <p>City : {game.visitor_team.city}</p>
                                <p>Division : {game.visitor_team.city}</p>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
            ))}
        </div>
    );
}

export default memo(Games)