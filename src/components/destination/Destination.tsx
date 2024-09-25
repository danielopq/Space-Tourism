import DestinationNavbar from './destinationNavBar/DestinationNavBar';
import Trip from './trip/Trip';
import destinationData from './destinationData/destInationData';
import './destination.css'
import { useEffect, useState } from 'react';

interface ActivesSection {
    moonActive: boolean;
    marsActive: boolean;
    europaActive: boolean;
    titanActive: boolean;
}

interface DestinationProps{
    changeBackgroundPic: (section:string)=>void;
}


const Destination: React.FC<DestinationProps> = ({changeBackgroundPic}) => {

    useEffect(()=>{
        changeBackgroundPic('destination');
    },[]);

    const { moon, mars, europa, titan } = destinationData;

    const [plansActive, setPlansActive] = useState<ActivesSection>({
        moonActive: true,
        marsActive: false,
        europaActive: false,
        titanActive: false,
    });

    const {moonActive,marsActive,europaActive,titanActive,} = plansActive;

    return (
        <div id="destination" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>01 </span>
                <span className='sectionTitle'>PICK YOUR DESTINATION</span>
            </div>
            <DestinationNavbar setPlansActive={setPlansActive} />
            <Trip details={moon} index="1" active={moonActive} />
            <Trip details={mars} index="2" active={marsActive} />
            <Trip details={europa} index="3" active={europaActive} />
            <Trip details={titan} index="4" active={titanActive} />
        </div>
    )
}
export default Destination