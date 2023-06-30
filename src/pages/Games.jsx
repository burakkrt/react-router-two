import {getContext} from "../context/ContextProvider.jsx";

export default function Games() {

    const {games} = getContext();
    games.data && console.log(games);

    return (
        <div className="grid grid-cols-2 gap-2">
            {games.data && games.data.map(game => (
                <div className="bg-slate-200" key={game.id}>
                    <div className="bg-slate-800 text-slate-100 p-3">
                        <span className="me-5">Oyun no : {game.id}</span>
                        <h1 className="inline-block relative end-0">{game.home_team.full_name} <span
                            className="text-slate-400">({game.home_team_score})</span> - {game.visitor_team.full_name}
                            <span
                                className="text-slate-400">({game.visitor_team_score})</span></h1>
                    </div>
                    <div className="flex justify-around my-3">
                        <div>
                            <p>Team 1 (Home) {game.home_team_score > game.visitor_team_score &&
                                <span className="text-green-600 font-bold">Winner</span>}</p>
                            <p>Team Id : {game.home_team.id}</p>
                            <p>Name : {game.home_team.full_name}</p>
                            <p>Abbreviation : {game.home_team.abbreviation}</p>
                            <p>City : {game.home_team.city}</p>
                            <p>Division : {game.home_team.city}</p>
                        </div>
                        <div>
                            <p>Team 2 (Visitor) {game.visitor_team_score > game.home_team_score &&
                                <span className="text-green-600 font-bold">Winner</span>}</p>
                            <p>Team Id : {game.visitor_team.id}</p>
                            <p>Name : {game.visitor_team.full_name}</p>
                            <p>Abbreviation : {game.visitor_team.abbreviation}</p>
                            <p>City : {game.visitor_team.city}</p>
                            <p>Division : {game.visitor_team.city}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}