import { useRef, useState } from 'react';
import './navBar.css';

const NavBar = () => {

    //Contains the state of the links. When it is inactive, it displays a fixed bottom border, and the cursor doesn't change on hover.
    const [linkState, setLinkState] = useState({
        homeLinkState: 'navbarSectionLink inactive',
        destinationLinkState: 'navbarSectionLink active',
        crewLinkState: 'navbarSectionLink active',
        technologyLinkState: 'navbarSectionLink active',
    });

    const homeLink = useRef<HTMLDivElement>(null);
    const destinationLink = useRef<HTMLDivElement>(null);
    const crewLink = useRef<HTMLDivElement>(null);
    const technologyLink = useRef<HTMLDivElement>(null);

    const { homeLinkState, destinationLinkState, crewLinkState, technologyLinkState, } = linkState


    const handleClick = (link:string) => {
        let newState = {
            homeLinkState: 'navbarSectionLink active',
            destinationLinkState: 'navbarSectionLink active',
            crewLinkState: 'navbarSectionLink active',
            technologyLinkState: 'navbarSectionLink active',
        }

        setLinkState({...newState,[`${link}State`]:'navbarSectionLink inactive'});
        console.table(linkState);
    }

    return (
        <nav>
            <div id="navBarLeft">
                <div id="logo"></div>
                <div id="navBarline"></div>
            </div>
            <div id="navBarRight">
                <div ref={homeLink} className={homeLinkState} onClick={() => handleClick("homeLink")}>
                    <span className='sectionNumber'>00</span>
                    <span className='sectionName'> HOME</span>
                </div>
                <div ref={destinationLink} className={destinationLinkState} onClick={() => handleClick("destinationLink")}>
                    <span className='sectionNumber'>01</span>
                    <span className='sectionName'> DESTINATION</span>
                </div>
                <div ref={crewLink} className={crewLinkState} onClick={() => handleClick("crewLink")}>
                    <span className='sectionNumber'>02</span>
                    <span className='sectionName'> CREW</span>
                </div>
                <div ref={technologyLink} className={technologyLinkState} onClick={() => handleClick("technologyLink")}>
                    <span className='sectionNumber'>03</span>
                    <span className='sectionName'> TECHNOLOGY</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar