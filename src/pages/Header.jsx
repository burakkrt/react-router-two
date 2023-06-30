import {NavLink} from "react-router-dom";

export default function Header() {

    return (
        <header className="bg-slate-800 text-slate-100 p-5">
            <nav className="flex flex-row items-center">
                <div className="w-64">
                    <h1 className="text-5xl font-bold tracking-widest text-yellow-400">LOGO</h1>
                </div>
                <div className="flex-1">
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
                    </ul>
                </div>
            </nav>
        </header>
    );
}