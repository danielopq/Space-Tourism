import { useState } from 'react';
import './TechnologyNavBar.css';

const TechnologyNavBar: React.FC = () => {

    interface ButtonsState {
        launchVehicleState: string;
        spacePortState: string;
        spaceCapsuleState: string;
    }

    const [buttonsState, setButtonsState] = useState<ButtonsState>({
        launchVehicleState: 'techNavBarBt techNavBarBt-active',
        spacePortState: 'techNavBarBt techNavBarBt-inactive',
        spaceCapsuleState: 'techNavBarBt techNavBarBt-inactive',
    });
    const { launchVehicleState, spacePortState, spaceCapsuleState } = buttonsState;

    const handleClick = (itemName: string):void => {
        let newButtonsState:ButtonsState={
            launchVehicleState: 'techNavBarBt techNavBarBt-inactive',
            spacePortState: 'techNavBarBt techNavBarBt-inactive',
            spaceCapsuleState: 'techNavBarBt techNavBarBt-inactive',
        }

        setButtonsState({...newButtonsState,[`${itemName}State`]:'techNavBarBt techNavBarBt-active'});
    }

    return (
        <nav id="technologyNavBar">
            <div className={launchVehicleState} onClick={() => handleClick('launchVehicle')}>1</div>
            <div className={spacePortState} onClick={() => handleClick('spacePort')}>2</div>
            <div className={spaceCapsuleState} onClick={() => handleClick('spaceCapsule')}>3</div>
        </nav>
    )
}
export default TechnologyNavBar;