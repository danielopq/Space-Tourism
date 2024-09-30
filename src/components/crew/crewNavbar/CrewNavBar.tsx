import { useState } from 'react';
import './crewNavBar.css';

interface ActiveProfiles {
    DouglasHurleyActive: boolean;
    MarkShuttleworthActive: boolean;
    VictorGloverActive: boolean;
    AnoushehAnsariActive: boolean;
}

interface NavBarProps {
    setActiveProfile: (activeProfile: ActiveProfiles) => void;
}

interface ButtonState {
    [buttonRef: string]: string,
}

/**
 * Crew navigation bar component that allows users to switch between different crew members.
 * @param {NavBarProps} param0 - Props containing the function to update the active crew member profile.
 * @returns {JSX.Element} - The navigation bar for selecting crew members.
 */
const CrewNavBar: React.FC<NavBarProps> = ({setActiveProfile}) => {
    const [buttonsState, setButtonsState] = useState<ButtonState>({
        DouglasHurleyBt: 'crewNavBarButton crewNavBarButtonInactive',
        MarkShuttleworthBt: 'crewNavBarButton crewNavBarButtonActive',
        VictorGloverBt: 'crewNavBarButton crewNavBarButtonActive',
        AnoushehAnsariBt: 'crewNavBarButton crewNavBarButtonActive',
    });

    const { DouglasHurleyBt, MarkShuttleworthBt, VictorGloverBt, AnoushehAnsariBt, } = buttonsState;

    /**
     * Updates the state to display the selected crew member's profile and sets the corresponding button to inactive.
     * @param {string} crewMember - The name of the crew member to be displayed.
     */
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
export default CrewNavBar;
