import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout;