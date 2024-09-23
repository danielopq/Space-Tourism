import { useEffect, useRef, useState } from 'react'
import DestinationNavbar from './destinationNavBar/DestinationNavBar';
import destinationData from './destinationData/destInationData';
import './destination.css'

const Destination: React.FC = () => {

    interface TripPlan {
        planetName: string,
        tripDescription: string,
        distance: string,
        travelTime: string,
        picPath: string
    }

    const [tripPlan, setTriplan] = useState<TripPlan>(destinationData.moon);
    const { planetName, tripDescription, distance, travelTime, picPath } = tripPlan;

    const destinationPic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (destinationPic.current) {
            destinationPic.current.classList.remove('fade-in');
            destinationPic.current.classList.add('fade-out');
        }
        const timeout = setTimeout(() => {
            if (destinationPic.current) {
                if (destinationPic.current) {
                    destinationPic.current.setAttribute('style',`background-image: url(${picPath});`);
                    destinationPic.current.classList.add('fade-in');
                }
            }
        }, 100);

        return () => clearTimeout(timeout); // Limpia el timeout cuando el componente se desmonte
    }, [tripPlan]);

    return (
        <div id="destination" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>01 </span>
                <span className='sectionTitle'>PICK YOUR DESTINATION</span>
            </div>
            <div id="destinationMain">
                <div id="destinationPic" ref={destinationPic} className=""></div>
                <div id="destinationContent">
                    <DestinationNavbar setTriplan={setTriplan} />
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