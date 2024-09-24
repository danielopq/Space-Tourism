import crewData from './crewData/crewData';
import CrewMember from './crewMember/CrewMember';
import CrewNavBar from './crewNavbar/CrewNavBar';

const Crew: React.FC = () => {

    const { name, rank, description, picPath } = crewData.DouglasHurley;

    return (
        <div id="crew" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>02 </span>
                <span className='sectionTitle'>MEET YOUR CREW</span>
            </div>
            <CrewNavBar />
            <CrewMember name={name} rank={rank} description={description} picPath={picPath} />
        </div>
    )
}
export default Crew