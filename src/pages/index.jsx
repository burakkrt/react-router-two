import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {

    return (
        <div className="container mx-auto  shadow-xl">
            <Header/>
            <div className="hMinScreen p-5 relative">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}