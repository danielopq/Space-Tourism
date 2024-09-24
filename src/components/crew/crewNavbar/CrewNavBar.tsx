import { useState } from 'react';
import './crewNavBar.css';

interface ButtonState {
    [buttonRef: string]: string;
}

const CrewNavBar: React.FC = () => {
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

        setButtonsState({...newButtonState,[`${crewMember}Bt`]:'crewNavBarButton crewNavBarButtonInactive'})
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