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
    const [currentSection, setCurrentSection] = useState<string>('home');

    const changeSection = (section: string): void => {
        setBackGroundPic(`${section}BackGround`);
        setCurrentSection(section);
    }

    return (
        <main className={backGroundPic}>
            <NavBar currentSection={currentSection}/>
            <Routes>
                <Route path="/" element={<Home changeSection={changeSection}/>} />
                <Route path="/destination" element={<Destination changeSection={changeSection}  />} />
                <Route path="/crew" element={<Crew changeSection={changeSection} />} />
                <Route path="/technology" element={<Technology changeSection={changeSection} />} />
            </Routes>
        </main>
    )
}

export default SpaceTourismApp