import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';

function Layout() {

    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;