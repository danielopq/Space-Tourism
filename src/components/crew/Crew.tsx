import './crew.css'
import crewData from './crewData/crewData';

const Crew: React.FC = () => {

    const {name,rank,description,picPath} = crewData.DouglasHurley;

    return (
        <div id="crew" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>02 </span>
                <span className='sectionTitle'>MEET YOUR CREW</span>
            </div>
            <div className="crewMain">
                <div className='crewDescription'>
                    <p className='crewName'>{name}</p>
                    <p className='crewRank'>{rank}</p>
                    <p className='crewDescription'>{description}</p>
                </div>
                <div className='crewPicture' style={{backgroundImage: `url(${picPath})`}}></div>
            </div>
        </div>
    )
}
export default Crew