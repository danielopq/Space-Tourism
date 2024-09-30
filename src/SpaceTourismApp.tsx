import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import '../src/assets/css/SpaceTourismApp.css';
import NavBar from './components/navBar/NavBar';
import Home from "./components/home/Home";
import Destination from "./components/destination/Destination";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";

import * as backGroundPics from '../src/assets/img';

/**
 * Main component containing all sections and their respective routes.
 * @returns {JSX.Element} - Main component
 */

type BackgroundPicKeys = 'homeDesktop' | 'homeMobile' | 'homeTablet' | 'destinationDesktop' | 'destinationMobile' | 'destinationTablet' | 'crewDesktop' | 'crewMobile' | 'crewTablet' | 'technologyDesktop' | 'technologyMobile' | 'technologyTablet';

const SpaceTourismApp: React.FC = () => {

    const [currentSection, setCurrentSection] = useState<string>('home');
    const [backgroundPicture,setBackgroundPicture] = useState<BackgroundPicKeys>('homeDesktop');
    let windowWidth: number = window.innerWidth; //window width

    
    /**
    * Sets up the picture size depending on the window size.
    */
    const setWindowWidth = ():void => {
        windowWidth = window.innerWidth;
        selectPicture(currentSection);
        console.log(currentSection);
    }

    const selectPicture = (section:string):void => {
        let backgroundPicture:BackgroundPicKeys = 'homeDesktop';
        windowWidth < 768 && (backgroundPicture = section+"Mobile");
        (windowWidth >= 768 && windowWidth <= 1024 ) && (backgroundPicture = section+"Tablet");
        windowWidth > 1024 && (backgroundPicture = section+"Desktop");
        setBackgroundPicture(backgroundPicture as BackgroundPicKeys);
    }

    //Sets up the initial picture size and adds and event listener to the window.
    useEffect(() => {
        window.addEventListener('resize', setWindowWidth);
    }, [])

    /**
     * Changes the background image and switches the current section to the desired one.
     * @param {string} section - Selected section to be desplayed.
     */
    const changeSection = (section: string): void => {
        setCurrentSection(section);
        selectPicture(section);
    }

    return (
        <main style={{ backgroundImage: `url(${backGroundPics[backgroundPicture as keyof typeof backGroundPics]})` }}>
            <NavBar currentSection={currentSection} />
            <Routes>
                <Route path="/" element={<Home changeSection={changeSection} />} />
                <Route path="/destination" element={<Destination changeSection={changeSection} />} />
                <Route path="/crew" element={<Crew changeSection={changeSection} />} />
                <Route path="/technology" element={<Technology changeSection={changeSection} />} />
            </Routes>
        </main>
    )
}

export default SpaceTourismApp