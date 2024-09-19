import { Route, Routes } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";

const SpaceTourismApp = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                {/* <Route path="/" element={<Home/>}/> */}
                <Route path="/" element={<Destination/>}/>
            </Routes>
        </>

    )
}

export default SpaceTourismApp