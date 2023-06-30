import {useNavigate, useRouteError} from "react-router-dom";

export default function Error404() {

    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="grid place-content-center h-screen text-center">
            <span
                className="text-3xl lg:text-6xl mb-1 uppercase font-bold tracking-widest">{error.status} -{error.statusText}</span>
            <span
                className="mb-5 lg:text-lg font-bold">The content you are looking for may have been changed or removed.</span>
            <button className="bg-slate-200 px-2 py-1 rounded hover:bg-slate-300 duration-200"
                    onClick={() => navigate('/')}>Go to Home
            </button>
        </div>
    );
}