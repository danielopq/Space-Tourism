import { useState } from 'react';
import './destination.css'

const Destination: React.FC = () => {

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
    }

    return (
        <div id="destination" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>01 </span>
                <span className='sectionTitle'>PICK YOUR DESTINATION</span>
            </div>
            <div id="destinationMain">
                <div id="destinationPic"></div>
                <div id="destinationContent">
                    <nav id="destinationNavbar">
                        <div className={moonLinkState} onClick={() => handleClick('moon')}>MOON</div>
                        <div className={marsLinkState} onClick={() => handleClick('mars')}>MARS</div>
                        <div className={europaLinkState} onClick={() => handleClick('europa')}>EUROPA</div>
                        <div className={titanLinkState} onClick={() => handleClick('titan')}>TITAN</div>
                    </nav>
                    <h1 id="destinationPlanetName">MOON</h1>
                    <p id="destinationMainText" className='mainText'>
                        See our planet as you’ve never seen it before. A perfect relaxing
                        trip away to help regain perspective and come back refreshed. While
                        you’re there, take in some history by visiting the Luna 2 and Apollo
                        11 landing sites.
                    </p>
                    <div id="destinationData">
                        <div id="destinationDistance">
                            <div className='destinationDataTitle'>AVG. DISTANCE</div>
                            <div className='destinationDataDetail'>384,400 KM</div>
                        </div>
                        <div id="destinationTime">
                            <div className='destinationDataTitle'>EST. TRAVEL TIME</div>
                            <div className='destinationDataDetail'>3 DAYS</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination