import { Route, Routes } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";

const SpaceTourismApp = () => {
    return (
        <main>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </main>

    )
}

export default SpaceTourismApp