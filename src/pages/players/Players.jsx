import {getContext} from '../../context/ContextProvider.jsx'
import SkeletonGameMatch from "../../components/SkeletonGameMatch.jsx";
import LazyLoad from "react-lazy-load";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Players() {

    const {
        players,
        playersPageCount,
        isLoading
    } = getContext();

    function positionConvert(position) {
        switch (position.toLowerCase()) {
            case 'g':
                return 'Guard (G)'
            case 'c':
                return 'Center (C)'
            case 'f':
                return 'Forward (F)'
            case 'c-f':
                return 'Center Forward (C-F)'
            case 'f-c':
                return 'Forward Center (F-C)'
            case 'g-c':
                return 'Guard Center (G-C)'
            case 'c-g':
                return 'Center Guard (C-G)'
            case '':
                return 'Unknown'
            default:
                return position;
        }
    }


    if (isLoading) return <SkeletonGameMatch cards={playersPageCount}/>
    else return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {players.data && players.data.map(player => (
                <LazyLoad height={330} threshold={0.25} key={player.id}>
                    <div className="bg-yellow-400">
                        <div className="bg-slate-800 text-slate-100 p-3">
                            <span className="me-5"><FontAwesomeIcon
                                icon="fa-solid fa-user" className="me-2"/>Player {player.id}</span>
                        </div>
                        <div className="flex items-center justify-around py-2 pb-5">
                            <div>
                                <p className="border-b border-yellow-600 font-bold  pb-1 my-2 text-lg"><FontAwesomeIcon
                                    icon="fa-solid fa-basketball"
                                    className="me-2"/>Player</p>
                                <h1>Name : <span
                                    className="font-bold text-red-600">{player.first_name + " " + player.last_name}</span>
                                </h1>
                                <p>Position : {positionConvert(player.position)}</p>
                                <p className="border-b border-yellow-600 font-bold  pb-1 my-2 text-lg"><FontAwesomeIcon
                                    icon="fa-solid fa-people-group" className="me-2"/>Team</p>
                                <p>Id : {player.team.id}</p>
                                <p>Name : {player.team.full_name}</p>
                                <p>Abbreviation : {player.team.abbreviation}</p>
                                <p>Division : {player.team.division}</p>
                            </div>
                            <div>
                                <img src="/assets/img/nba-logo.png" alt="player logo" style={{width: "175px"}}
                                     className="hidden md:block"/>
                            </div>

                        </div>
                    </div>
                </LazyLoad>
            ))}
        </div>
    );
}