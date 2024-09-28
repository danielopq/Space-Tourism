import { useState } from 'react';
import './crewNavBar.css';

interface ActiveProfiles {
    DouglasHurleyActive: boolean;
    MarkShuttleworthActive: boolean;
    VictorGloverActive: boolean;
    AnoushehAnsariActive: boolean;
}

interface navBarProps {
    setActiveProfile: (activeProfile: ActiveProfiles) => void;
}

interface ButtonState {
    [buttonRef: string]: string,
}
/**
 * Crew navigation bar component. Displays different crew members based on the selected button
 * @param param0 - Switches the active crew member profile.
 * @returns - The navigation bar for the crew section.
 */
const CrewNavBar: React.FC<navBarProps> = ({setActiveProfile}) => {
    const [buttonsState, setButtonsState] = useState<ButtonState>({
        DouglasHurleyBt: 'crewNavBarButton crewNavBarButtonInactive',
        MarkShuttleworthBt: 'crewNavBarButton crewNavBarButtonActive',
        VictorGloverBt: 'crewNavBarButton crewNavBarButtonActive',
        AnoushehAnsariBt: 'crewNavBarButton crewNavBarButtonActive',
    });

    const { DouglasHurleyBt, MarkShuttleworthBt, VictorGloverBt, AnoushehAnsariBt, } = buttonsState;

    const handleButton = (crewMember: string) => {
        let newButtonState = {
            DouglasHurleyBt: 'crewNavBarButton crewNavBarButtonActive',
            MarkShuttleworthBt: 'crewNavBarButton crewNavBarButtonActive',
            VictorGloverBt: 'crewNavBarButton crewNavBarButtonActive',
            AnoushehAnsariBt: 'crewNavBarButton crewNavBarButtonActive',
        }

        let newActiveProfiles = {
            DouglasHurleyActive: false,
            MarkShuttleworthActive: false,
            VictorGloverActive: false,
            AnoushehAnsariActive: false,
        }

        setButtonsState({ ...newButtonState, [`${crewMember}Bt`]: 'crewNavBarButton crewNavBarButtonInactive' });
        setActiveProfile({...newActiveProfiles,[`${crewMember}Active`]:true});
    }

    return (
        <nav id="crewNavbar">
            <div className={DouglasHurleyBt} onClick={() => handleButton('DouglasHurley')}></div>
            <div className={MarkShuttleworthBt} onClick={() => handleButton('MarkShuttleworth')}></div>
            <div className={VictorGloverBt} onClick={() => handleButton('VictorGlover')}></div>
            <div className={AnoushehAnsariBt} onClick={() => handleButton('AnoushehAnsari')}></div>
        </nav>
    )
}
export default CrewNavBar
