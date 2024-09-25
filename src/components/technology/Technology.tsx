import TerminologyCard from './terminologyCard/TerminologyCard';
import technologyData from './technologyData/technologyData';
import TechnologyNavBar from './technologyNavBar/TechnologyNavBar';
import { useEffect, useState } from 'react';

interface ActiveItems {
    launchVehicleActive: boolean;
    spacePortActive: boolean;
    spaceCapsuleActive: boolean;
}

interface TechnologyProps{
    changeBackgroundPic: (section:string)=>void;
}

const Technology: React.FC<TechnologyProps> = ({changeBackgroundPic}) => {

    useEffect(()=>{
        changeBackgroundPic('technology');
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
            <div className='sectionHeader'>
                <span className='sectionNumber'>03 </span>
                <span className='sectionTitle'>SPACE LAUNCH 101</span>
            </div>
            <TechnologyNavBar setItemsActive={setActiveItems}/>
            <TerminologyCard item={launchVehicle} active={launchVehicleActive} index={1} />
            <TerminologyCard item={spacePort} active={spacePortActive} index={2} />
            <TerminologyCard item={spaceCapsule} active={spaceCapsuleActive} index={3} />
        </div>
    )
}
export default Technology