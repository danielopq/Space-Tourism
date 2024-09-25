import TerminologyCard from './terminologyCard/TerminologyCard';
import technologyData from './technologyData/technologyData';

interface Item{
    itemName: string,
    description:string,
    picPath:string,
}

interface ItemsList{
    [item:string]:Item;
}

const Technology: React.FC = () => {

    const {launchVehicle,spacePort,spaceCapsule} = technologyData;

    return (
        <div id="technology" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>03 </span>
                <span className='sectionTitle'>SPACE LAUNCH 101</span>
            </div>
            <TerminologyCard item={launchVehicle} active={true} index={1}/>
        </div>
    )
}
export default Technology