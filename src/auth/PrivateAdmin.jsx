import {getContext} from '../context/ContextProvider.jsx'
import {Navigate} from 'react-router-dom'

export default function PrivateAdmin({children}) {

    const {authAdmin} = getContext();

    if (!authAdmin) {
        return <Navigate to="/" replace={true}/>
    } else return children;

}