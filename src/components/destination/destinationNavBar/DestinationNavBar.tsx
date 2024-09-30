import { useState } from "react";
import './destinationNavBar.css';

interface ActivesSection {
    moonActive: boolean;
    marsActive: boolean;
    europaActive: boolean;
    titanActive: boolean;
}

interface navBarProps {
    setPlansActive: (activeSections: ActivesSection) => void;
}


/**
 * Renders the destination navigation bar for selecting different trips.
 * @param {Function} param0 - Object containing a function to update the active trip.
 * @returns {JSX.Element} - The destination navigation bar component.
 */
const DestinationNavbar: React.FC<navBarProps> = ({ setPlansActive }) => {

    interface LinksState {
        moonLinkState: string;
        marsLinkState: string;
        europaLinkState: string;
        titanLinkState: string;
    }

    // Manages the state of the navigation links.
    const [linksState, setLinkState] = useState<LinksState>(
        {
            moonLinkState: 'destNavBarButton destNavBarInactive',
            marsLinkState: 'destNavBarButton destNavBarActive',
            europaLinkState: 'destNavBarButton destNavBarActive',
            titanLinkState: 'destNavBarButton destNavBarActive',
        }
    );

    const { moonLinkState, marsLinkState, europaLinkState, titanLinkState } = linksState

    /**
     * Updates the active link and sets the corresponding active trip.
     * @param {string} section - Name of the selected section (e.g., 'moon', 'mars').
     */
    const handleClick = (section: string): void => {
        let newLinksState: LinksState = {
            moonLinkState: 'destNavBarButton destNavBarActive',
            marsLinkState: 'destNavBarButton destNavBarActive',
            europaLinkState: 'destNavBarButton destNavBarActive',
            titanLinkState: 'destNavBarButton destNavBarActive',
        }

        let newPlansActive: ActivesSection = {
            moonActive: false,
            marsActive: false,
            europaActive: false,
            titanActive: false,
        }

        setLinkState({ ...newLinksState, [`${section}LinkState`]: 'destNavBarButton destNavBarInactive' });
        setPlansActive({ ...newPlansActive, [`${section}Active`]: true })
    }

    return (
        <nav id="destinationNavbar">
            <div id="desNavbarLinks">
                <div className={moonLinkState} onClick={() => handleClick('moon')}>MOON</div>
                <div className={marsLinkState} onClick={() => handleClick('mars')}>MARS</div>
                <div className={europaLinkState} onClick={() => handleClick('europa')}>EUROPA</div>
                <div className={titanLinkState} onClick={() => handleClick('titan')}>TITAN</div>
            </div>
        </nav>
    )
}
export default DestinationNavbar;