import DestinationNavbar from './destinationNavBar/DestinationNavBar';
import './destination.css'
import { useState } from 'react';
import destinationData from './destinationData/DestInationData';

const Destination: React.FC = () => {

    interface TripPlan {
        planetName: string,
        tripDescription: string,
        distance: string,
        travelTime: string,
        picPath: string
    }
    const { moon, mars, europa,titan } = destinationData
    const [tripPlan, setTriplan] = useState<TripPlan>(moon);
    
    const { planetName, tripDescription, distance, travelTime, picPath } = tripPlan;

    return (
        <div id="destination" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>01 </span>
                <span className='sectionTitle'>PICK YOUR DESTINATION</span>
            </div>
            <div id="destinationMain">
                <div id="destinationPic" style={{ backgroundImage: `url(${picPath})` }}></div>
                <div id="destinationContent">
                    <DestinationNavbar />
                    <h1 id="destinationPlanetName">{planetName}</h1>
                    <p id="destinationMainText" className='mainText'>{tripDescription}</p>
                    <div id="destinationData">
                        <div id="destinationDistance">
                            <div className='destinationDataTitle'>AVG. DISTANCE</div>
                            <div className='destinationDataDetail'>{distance}</div>
                        </div>
                        <div id="destinationTime">
                            <div className='destinationDataTitle'>EST. TRAVEL TIME</div>
                            <div className='destinationDataDetail'>{travelTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination