import { useState } from "react";
import destinationData from "../destinationData/destInationData";
import './destinationNavBar.css';


interface TripPlan {
    planetName: string,
    tripDescription: string,
    distance: string,
    travelTime: string,
    picPath: string
}

interface navBarProps {
    setTriplan: (tripPlan: TripPlan) => void;
}

const DestinationNavbar:React.FC<navBarProps> = ({setTriplan}) =>{

    const { moon, mars, europa,titan } = destinationData;

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
       
        setLinkState({...newLinksState,[`${section}LinkState`]:'destNavBarButton destNavBarInactive'})

        switch (section){
            case 'moon':
                setTriplan(moon);
                break;
            case 'mars':
                setTriplan(mars);
                break;
            case 'europa':
                setTriplan(europa);
                break;
            case 'titan':
                setTriplan(titan);
                break;
        }
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