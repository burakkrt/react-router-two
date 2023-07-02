import {Link, NavLink} from "react-router-dom";

export default function Header() {

    return (
        <header className="bg-slate-800 text-slate-100 p-5">
            <nav className="flex flex-row items-center justify-start">
                <div className="grow-[1]">
                    <div className="flex items-center gap-8">
                        <img
                            src="/assets/img/nba-logo.png" alt="nba logo" style={{width: "74px"}}/>
                        <Link to="/"><h1
                            className="text-5xl font-bold tracking-widest text-yellow-400 uppercase">Basketbal
                        </h1></Link>
                    </div>
                </div>
                <div className="grow-[4]">
                    <ul className="flex flex-row gap-5 text-xl">
                        <NavLink to="/" className="navlink hover:text-yellow-400 duration-150">
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/games" className="navlink hover:text-yellow-400 duration-150">
                            <li>Games</li>
                        </NavLink>
                        <NavLink to="/players" className="navlink hover:text-yellow-400 duration-150">
                            <li>Players</li>
                        </NavLink>
                        <NavLink to="/admin" className="navlink hover:text-yellow-400 duration-150">
                            <li>Admin Dasboard</li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
}