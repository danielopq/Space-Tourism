import { useRef, useState } from 'react';
import './navBar.css';

const NavBar = () => {

    //Contains the state of the links. When it is inactive, it displays a fixed bottom border, and the cursor doesn't change on hover.
    const [linkState, SetLinkState] = useState({
        homeLinkState: 'navbarSectionLink inactive',
        destinationLinkState: 'navbarSectionLink active',
        crewLinkState: 'navbarSectionLink active',
        technologyLinkState: 'navbarSectionLink active',
    });

    const homeLink = useRef(null);
    const destinationLink = useRef(null);
    const crewLink = useRef(null);
    const technologyLink = useRef(null);

    const { homeLinkState, destinationLinkState, crewLinkState, technologyLinkState, } = linkState

    return (
        <nav>
            <div id="navBarLeft">
                <div id="logo"></div>
                <div id="navBarline"></div>
            </div>
            <div id="navBarRight">
                <div ref="homeLink" className={homeLinkState}>
                    <span className='sectionNumber'>00</span>
                    <span className='sectionName'> HOME</span>
                </div>
                <div ref="destinationLink" className={destinationLinkState}>
                    <span className='sectionNumber'>01</span>
                    <span className='sectionName'> DESTINATION</span>
                </div>
                <div ref="crewLink" className={crewLinkState}>
                    <span className='sectionNumber'>02</span>
                    <span className='sectionName'> CREW</span>
                </div>
                <div ref="technologyLink" className={technologyLinkState}>
                    <span className='sectionNumber'>03</span>
                    <span className='sectionName'> TECHNOLOGY</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar