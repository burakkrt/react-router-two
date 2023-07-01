import {getContext} from "../context/ContextProvider.jsx";
import {Navigate} from "react-router-dom";
import Welcome from "../pages/Welcome.jsx";

export default function PrivateUser({children}) {

    const {auth} = getContext();

    if (!auth) {
        return <Navigate to='/games' replace={true}/>
    } else return children
}