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
            <CrewMember crewMenberProfile={DouglasHurley} activeProfile={true} index={1} />
            <CrewMember crewMenberProfile={MarkShuttleworth} activeProfile={false} index={2} />
            <CrewMember crewMenberProfile={VictorGlover} activeProfile={false} index={3} />
            <CrewMember crewMenberProfile={AnoushehAnsari} activeProfile={false} index={4} />
        </div>
    )
}
export default Crew