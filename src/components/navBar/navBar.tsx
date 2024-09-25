import { useEffect, useState } from 'react';
import './navBar.css';
import { useNavigate } from 'react-router-dom';

type NavBarProps = {
    currentSection:string;
};

interface LinkState {
    homeLinkState: string;
    destinationLinkState: string;
    crewLinkState: string;
    technologyLinkState: string;
}

/**
 * Contains the main navigation bar. It remains visible at all times.
 * @returns {React.FC} - Navigation bar
 */
const NavBar: React.FC<NavBarProps> = ({currentSection}) => {

    useEffect(()=>{
        handleClick(currentSection);
    },[currentSection]);

    const navigate = useNavigate();

    //Contains the state of the links. When it is inactive, it displays a fixed bottom border, and the cursor doesn't change on hover.
    const [linkState, setLinkState] = useState({
        homeLinkState: 'navbarSectionLink inactive',
        destinationLinkState: 'navbarSectionLink active',
        crewLinkState: 'navbarSectionLink active',
        technologyLinkState: 'navbarSectionLink active',
    });

    const { homeLinkState, destinationLinkState, crewLinkState, technologyLinkState, } = linkState

    /**
     * Displays the different sections of the website and updates the link state (active or inactive).
     * @param {string} section - Section name
     */
    const handleClick = (section: string): void => {
        let newState: LinkState = {
            homeLinkState: 'navbarSectionLink active',
            destinationLinkState: 'navbarSectionLink active',
            crewLinkState: 'navbarSectionLink active',
            technologyLinkState: 'navbarSectionLink active',
        }
        //If the link is active displays the corresponding section.
        if (linkState[`${section}LinkState` as keyof LinkState] != 'navbarSectionLink inactive') {
            section === "home" ? navigate('/') : navigate(`/${section}`);
        }
        setLinkState({ ...newState, [`${section}LinkState`]: 'navbarSectionLink inactive' });
    }

    return (
        <nav id="mainNavBar">
            <div id="navBarLeft">
                <div id="logo"></div>
                <div id="navBarline"></div>
            </div>
            <div id="navBarRight">
                <div className={homeLinkState} onClick={() => handleClick("home")}>
                    <span className='sectionNumber'>00</span>
                    <span className='sectionName'> HOME</span>
                </div>
                <div className={destinationLinkState} onClick={() => handleClick("destination")}>
                    <span className='sectionNumber'>01</span>
                    <span className='sectionName'> DESTINATION</span>
                </div>
                <div className={crewLinkState} onClick={() => handleClick("crew")}>
                    <span className='sectionNumber'>02</span>
                    <span className='sectionName'> CREW</span>
                </div>
                <div className={technologyLinkState} onClick={() => handleClick("technology")}>
                    <span className='sectionNumber'>03</span>
                    <span className='sectionName'> TECHNOLOGY</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar