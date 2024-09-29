import { useEffect, useState } from 'react';
import './destination.css'
import SectionHeader from '../sectionHeader/SectionHeader';
import DestinationNavbar from './destinationNavBar/DestinationNavBar';
import Trip from './trip/Trip';
import destinationData from './destinationData/destInationData';

interface ActivesSection {
    moonActive: boolean;
    marsActive: boolean;
    europaActive: boolean;
    titanActive: boolean;
}

interface DestinationProps{
    changeSection: (section:string)=>void;
}

/**
 * Destination page
 * @param {Function(string):void} - Function passed by reference to navigate between sections. 
 * @returns - Component containing the destination page.
 */
const Destination: React.FC<DestinationProps> = ({changeSection}) => {

    /*
     Displays and set up the destination page. 
    */
    useEffect(()=>{
        changeSection('destination');
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
            <SectionHeader sectionNumber='01' sectionTitle='PICK YOUR DESTINATION'/>
            <DestinationNavbar setPlansActive={setPlansActive} />
            <Trip details={moon} index="1" active={moonActive} />
            <Trip details={mars} index="2" active={marsActive} />
            <Trip details={europa} index="3" active={europaActive} />
            <Trip details={titan} index="4" active={titanActive} />
        </div>
    )
}
export default Destination