import { useEffect, useState } from 'react';
import './trip.css';

interface TripPlan {
    planetName: string,
    tripDescription: string,
    distance: string,
    travelTime: string,
    picPath: string
}

interface tripProps {
    details: TripPlan,
    index: string,
    active: boolean
}

/**
 * Displays a trip.
 * @param param - details: Trip details, index: z-index of the component within the parent, active:  Indicates whether it should be displayed or not
 * @returns - Component containing all the details of a given trip.
 */
const Trip: React.FC<tripProps> = ({ details, index, active }) => {
    const { planetName, tripDescription, distance, travelTime, picPath } = details;
    
    const [tripOpacity, settripOpacity] = useState<string>('0')

    /*
    *Changes the component's opacity depending on whether it is active or not.
    */
    useEffect(() => {
        active ? settripOpacity('1') : settripOpacity('0');
    }, [active])

    return (
        <div className="destinationMain" style={{ zIndex: `${index}`, opacity: tripOpacity }}>
            <div className="destinationPic" style={{ backgroundImage: `url(${picPath})` }}></div>
            <div className="destinationContent">
                <h1 className="destinationPlanetName">{planetName}</h1>
                <p className="destinationMainText mainText">{tripDescription}</p>
                <div className="destinationData">
                    <div className="destinationDistance">
                        <div className='destinationDataTitle'>AVG. DISTANCE</div>
                        <div className='destinationDataDetail'>{distance}</div>
                    </div>
                    <div className="destinationTime">
                        <div className='destinationDataTitle'>EST. TRAVEL TIME</div>
                        <div className='destinationDataDetail'>{travelTime}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trip;