import {getContext} from '../context/ContextProvider.jsx'
import {Navigate} from 'react-router-dom'

export default function PrivateAdmin({children}) {

    const {authAdmin} = getContext();

    if (!authAdmin) {

        alert('Sorry.This page is inaccessible.\nYou are being redirected to the homepage.\n\nTR: Üzgünüm.Bu sayfaya erişim iznin yok.\nAnasayfaya yönlendiriliyorsun.')

        return <Navigate to="/" replace={true}/>
    } else return children;

}