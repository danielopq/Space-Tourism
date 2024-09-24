import { useState } from 'react';
import crewData from './crewData/crewData';
import CrewMember from './crewMember/CrewMember';
import CrewNavBar from './crewNavbar/CrewNavBar';

const Crew: React.FC = () => {

    const {DouglasHurley,MarkShuttleworth,VictorGlover,AnoushehAnsari,} = crewData;

    return (
        <div id="crew" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>02 </span>
                <span className='sectionTitle'>MEET YOUR CREW</span>
            </div>
            <CrewNavBar />
            <CrewMember crewMenberProfile={DouglasHurley} activeProfile={true} />
            <CrewMember crewMenberProfile={MarkShuttleworth} activeProfile={false} />
            <CrewMember crewMenberProfile={VictorGlover} activeProfile={false} />
            <CrewMember crewMenberProfile={AnoushehAnsari} activeProfile={false} />
        </div>
    )
}
export default Crew