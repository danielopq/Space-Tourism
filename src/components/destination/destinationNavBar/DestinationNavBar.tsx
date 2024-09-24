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

const DestinationNavbar: React.FC<navBarProps> = ({ setPlansActive }) => {

    interface LinksState {
        moonLinkState: string;
        marsLinkState: string;
        europaLinkState: string;
        titanLinkState: string;
    }

    const [linksState, setLinkState] = useState<LinksState>(
        {
            moonLinkState: 'destNavBarButton destNavBarInactive',
            marsLinkState: 'destNavBarButton destNavBarActive',
            europaLinkState: 'destNavBarButton destNavBarActive',
            titanLinkState: 'destNavBarButton destNavBarActive',
        }
    );

    const { moonLinkState, marsLinkState, europaLinkState, titanLinkState } = linksState

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
        setPlansActive({...newPlansActive,[`${section}Active`]:true})
    }

    return (
        <nav id="destinationNavbar">
            <div className={moonLinkState} onClick={() => handleClick('moon')}>MOON</div>
            <div className={marsLinkState} onClick={() => handleClick('mars')}>MARS</div>
            <div className={europaLinkState} onClick={() => handleClick('europa')}>EUROPA</div>
            <div className={titanLinkState} onClick={() => handleClick('titan')}>TITAN</div>
        </nav>
    )
}
export default DestinationNavbar;