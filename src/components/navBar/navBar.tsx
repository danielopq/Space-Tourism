import { useEffect, useRef, useState } from 'react';
import './navBar.css';
import { useNavigate } from 'react-router-dom';

type NavBarProps = {
    currentSection: string;
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
const NavBar: React.FC<NavBarProps> = ({ currentSection }) => {
    const navigate = useNavigate();
    const navBarMobileIcon = useRef<HTMLDivElement>(null);
    const navBarMobileMenu = useRef<HTMLDivElement>(null);
    const navBarMobileLinks = useRef<HTMLDivElement>(null);
    const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(true);

    useEffect(() => {
        let newState: LinkState = {
            homeLinkState: 'navbarSectionLink active',
            destinationLinkState: 'navbarSectionLink active',
            crewLinkState: 'navbarSectionLink active',
            technologyLinkState: 'navbarSectionLink active',
        }
        setLinkState({ ...newState, [`${currentSection}LinkState`]: 'navbarSectionLink inactive' });
    }, [currentSection]);

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
    const switchSection = (section: string): void => {

        //If the link is active displays the corresponding section.
        if (linkState[`${section}LinkState` as keyof LinkState] != 'navbarSectionLink inactive') {
            section === "home" ? navigate('/') : navigate(`/${section}`);
        }
        !mobileMenuVisible && displayMobileMenu();
    }

    const displayMobileMenu = (): void => {
        setMobileMenuVisible(!mobileMenuVisible);
        if (navBarMobileIcon.current) {
            mobileMenuVisible ? navBarMobileIcon.current.className = 'closeIcon' : navBarMobileIcon.current.className = 'burgerIcon';
        }
        if (navBarMobileMenu.current) {
            mobileMenuVisible ? navBarMobileMenu.current.className = 'navBarMobileBlur' : navBarMobileMenu.current.className = '';
        }
        if (navBarMobileLinks.current) {
            mobileMenuVisible ? navBarMobileLinks.current.className = 'mobilelinksDisplayed' : navBarMobileLinks.current.className = 'mobilelinksHiden';
        }
    }

    return (
        <nav id="mainNavBar">
            <div id="navBarLeft">
                <div id="logo"></div>
                <div id="navBarline"></div>
            </div>
            <div id="navBarMobile" ref={navBarMobileMenu} className=''>
                <div id="navBarMobileTop">
                    <div ref={navBarMobileIcon} id="navBarMobileIcon" className="burgerIcon" onClick={displayMobileMenu}></div>
                </div>
                <div ref={navBarMobileLinks} id="navBarMobileLinks" className='mobilelinksHiden'>
                    <div className={homeLinkState} onClick={() => switchSection("home")}>
                        <span className='sectionNumberDeco'>00</span>
                        <span className='sectionName'> HOME</span>
                    </div>
                    <div className={destinationLinkState} onClick={() => switchSection("destination")}>
                        <span className='sectionNumberDeco'>01</span>
                        <span className='sectionName'> DESTINATION</span>
                    </div>
                    <div className={crewLinkState} onClick={() => switchSection("crew")}>
                        <span className='sectionNumberDeco'>02</span>
                        <span className='sectionName'> CREW</span>
                    </div>
                    <div className={technologyLinkState} onClick={() => switchSection("technology")}>
                        <span className='sectionNumberDeco'>03</span>
                        <span className='sectionName'> TECHNOLOGY</span>
                    </div>
                </div>
            </div>
            <div id="navBarRight">
                <div className={homeLinkState} onClick={() => switchSection("home")}>
                    <span className='sectionNumberDeco'>00</span>
                    <span className='sectionName'> HOME</span>
                </div>
                <div className={destinationLinkState} onClick={() => switchSection("destination")}>
                    <span className='sectionNumberDeco'>01</span>
                    <span className='sectionName'> DESTINATION</span>
                </div>
                <div className={crewLinkState} onClick={() => switchSection("crew")}>
                    <span className='sectionNumberDeco'>02</span>
                    <span className='sectionName'> CREW</span>
                </div>
                <div className={technologyLinkState} onClick={() => switchSection("technology")}>
                    <span className='sectionNumberDeco'>03</span>
                    <span className='sectionName'> TECHNOLOGY</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar