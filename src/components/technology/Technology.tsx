import TerminologyCard from './terminologyCard/TerminologyCard';
import technologyData from './technologyData/technologyData';
import TechnologyNavBar from './technologyNavBar/TechnologyNavBar';

const Technology: React.FC = () => {

    const { launchVehicle, spacePort, spaceCapsule } = technologyData;

    return (
        <div id="technology" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>03 </span>
                <span className='sectionTitle'>SPACE LAUNCH 101</span>
            </div>
            <TechnologyNavBar />
            <TerminologyCard item={launchVehicle} active={true} index={1} />
            <TerminologyCard item={spacePort} active={false} index={2} />
            <TerminologyCard item={spaceCapsule} active={false} index={3} />
        </div>
    )
}
export default Technology