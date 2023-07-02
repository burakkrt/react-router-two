import {getContext} from "../context/ContextProvider.jsx";
import {Navigate} from "react-router-dom";

export default function PrivateUser({children}) {

    const {auth} = getContext();

    if (!auth) {
        return <Navigate to='/' replace={true}/>
    } else return children
}