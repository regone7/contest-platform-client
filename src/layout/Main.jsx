import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const Main = () => {
    return (
        <div>
            <div >
                <NavBar></NavBar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;