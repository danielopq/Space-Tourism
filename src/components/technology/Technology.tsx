import { useEffect, useState } from 'react';
import './technology.css';
import SectionHeader from '../sectionHeader/SectionHeader';
import TerminologyCard from './terminologyCard/TerminologyCard';
import technologyData from './technologyData/technologyData';
import TechnologyNavBar from './technologyNavBar/TechnologyNavBar';

interface ActiveItems {
    launchVehicleActive: boolean;
    spacePortActive: boolean;
    spaceCapsuleActive: boolean;
}

interface TechnologyProps{
    changeSection: (section:string)=>void;
}

const Technology: React.FC<TechnologyProps> = ({changeSection}) => {

    useEffect(()=>{
        changeSection('technology');
    },[]);

    const { launchVehicle, spacePort, spaceCapsule } = technologyData;

    const [activeItems, setActiveItems] = useState<ActiveItems>({
        launchVehicleActive: true,
        spacePortActive: false,
        spaceCapsuleActive: false,
    })

    const {launchVehicleActive,spacePortActive,spaceCapsuleActive,} = activeItems

    return (
        <div id="technology" className='sectionFrame'>
            <SectionHeader sectionNumber='03' sectionTitle='SPACE LAUNCH 101'/>
            <TechnologyNavBar setItemsActive={setActiveItems}/>
            <TerminologyCard item={launchVehicle} active={launchVehicleActive} index={1} />
            <TerminologyCard item={spacePort} active={spacePortActive} index={2} />
            <TerminologyCard item={spaceCapsule} active={spaceCapsuleActive} index={3} />
        </div>
    )
}
export default Technology