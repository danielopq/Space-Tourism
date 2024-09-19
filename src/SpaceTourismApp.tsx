import { Route, Routes } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";

const SpaceTourismApp = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                {/* <Route path="/" element={<Destination/>}/> */}
                {/* <Route path="/" element={<Crew/>}/> */}
                <Route path="/" element={<Technology/>}/>
            </Routes>
        </>

    )
}

export default SpaceTourismApp