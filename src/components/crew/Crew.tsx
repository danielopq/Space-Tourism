import { useEffect, useState } from 'react';
import crewData from './crewData/crewData';
import CrewMember from './crewMember/CrewMember';
import CrewNavBar from './crewNavbar/CrewNavBar';

interface ActiveProfiles{
    DouglasHurleyActive: boolean;
    MarkShuttleworthActive: boolean;
    VictorGloverActive: boolean;
    AnoushehAnsariActive: boolean;
}

interface CrewProps{
    changeBackgroundPic: (section:string)=>void;
}

const Crew: React.FC<CrewProps> = ({changeBackgroundPic}) => {

    useEffect(()=>{
        changeBackgroundPic('crew');
    },[]);

    const {DouglasHurley,MarkShuttleworth,VictorGlover,AnoushehAnsari,} = crewData;

    const [activeProfile,setActiveProfile] = useState<ActiveProfiles>({
        DouglasHurleyActive:true,
        MarkShuttleworthActive:false,
        VictorGloverActive:false,
        AnoushehAnsariActive:false,
    })

    const {DouglasHurleyActive,MarkShuttleworthActive,VictorGloverActive,AnoushehAnsariActive,} = activeProfile;

    return (
        <div id="crew" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>02 </span>
                <span className='sectionTitle'>MEET YOUR CREW</span>
            </div>
            <CrewNavBar setActiveProfile={setActiveProfile}/>
            <CrewMember crewMenberProfile={DouglasHurley} activeProfile={DouglasHurleyActive} index={1} />
            <CrewMember crewMenberProfile={MarkShuttleworth} activeProfile={MarkShuttleworthActive} index={2} />
            <CrewMember crewMenberProfile={VictorGlover} activeProfile={VictorGloverActive} index={3} />
            <CrewMember crewMenberProfile={AnoushehAnsari} activeProfile={AnoushehAnsariActive} index={4} />
        </div>
    )
}
export default Crew