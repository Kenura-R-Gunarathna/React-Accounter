import { Outlet } from "react-router-dom";

/* Loading molecular components */
import Navigation from "../components/molecules/Navigation";
import Footer from "../components/molecules/Footer";

export default function Root() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}