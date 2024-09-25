import { Route, Routes } from "react-router-dom";
import '../src/assets/css/SpaceTourismApp.css';
import NavBar from './components/navBar/NavBar';
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
import { useState } from "react";

const SpaceTourismApp: React.FC = () => {

    const [backGroundPic, setBackGroundPic] = useState<string>("homeBackGround");

    const changeBackgroundPic = (section: string) => {
        setBackGroundPic(`${section}BackGround`);
    }

    return (
        <main className={backGroundPic}>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home changeBackgroundPic={changeBackgroundPic} />} />
                <Route path="/destination" element={<Destination changeBackgroundPic={changeBackgroundPic} />} />
                <Route path="/crew" element={<Crew changeBackgroundPic={changeBackgroundPic}/>} />
                <Route path="/technology" element={<Technology changeBackgroundPic={changeBackgroundPic} />} />
            </Routes>
        </main>

    )
}

export default SpaceTourismApp