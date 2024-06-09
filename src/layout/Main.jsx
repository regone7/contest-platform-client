import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Main = () => {
    return (
        <div>
            <div >
                <NavBar></NavBar>
            </div>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <div >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;