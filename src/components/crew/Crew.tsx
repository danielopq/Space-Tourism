import { useEffect, useState } from 'react';
import './crew.css';
import SectionHeader from '../sectionHeader/SectionHeader';
import crewData from './crewData/crewData';
import CrewMember from './crewMember/CrewMember';
import CrewNavBar from './crewNavbar/CrewNavBar';

interface ActiveProfiles {
    DouglasHurleyActive: boolean;
    MarkShuttleworthActive: boolean;
    VictorGloverActive: boolean;
    AnoushehAnsariActive: boolean;
}

interface CrewProps {
    changeSection: (section: string) => void;
}

/**
 * Renders the crew page.
 * @param {CrewProps} param0 - Props containing the `changeSection` function, which changes the background image and updates the current section in the parent component.
 * @returns {JSX.Element} - The crew page component.
 */
const Crew: React.FC<CrewProps> = ({ changeSection }) => {

    // Update the section to 'crew' on component mount.
    useEffect(() => {
        changeSection('crew');
    }, []);

    const { DouglasHurley, MarkShuttleworth, VictorGlover, AnoushehAnsari, } = crewData;

    // Manages the active crew member profile.
    const [activeProfile, setActiveProfile] = useState<ActiveProfiles>({
        DouglasHurleyActive: true,
        MarkShuttleworthActive: false,
        VictorGloverActive: false,
        AnoushehAnsariActive: false,
    })

    const { DouglasHurleyActive, MarkShuttleworthActive, VictorGloverActive, AnoushehAnsariActive, } = activeProfile;

    return (
        <div id="crew" className='sectionFrame'>
            <SectionHeader sectionNumber='02' sectionTitle='MEET YOUR CREW'/>
            <CrewNavBar setActiveProfile={setActiveProfile} />
            <CrewMember crewMenberProfile={DouglasHurley} activeProfile={DouglasHurleyActive} index={1} />
            <CrewMember crewMenberProfile={MarkShuttleworth} activeProfile={MarkShuttleworthActive} index={2} />
            <CrewMember crewMenberProfile={VictorGlover} activeProfile={VictorGloverActive} index={3} />
            <CrewMember crewMenberProfile={AnoushehAnsari} activeProfile={AnoushehAnsariActive} index={4} />
        </div>
    )
}
export default Crew