import { useState } from 'react';
import './technologyNavBar.css';

interface ActiveItems {
    launchVehicleActive: boolean;
    spacePortActive: boolean;
    spaceCapsuleActive: boolean;
}

interface TechNavBarProps {
    setItemsActive: (activeItems: ActiveItems) => void;
}

/**
 * Component that renders the terminology navigation bar.
 * @param {ActiveItems} param0 - State of the active card names.
 * @returns {JSX.Element} The terminology navigation bar component.
 */
const TechnologyNavBar: React.FC<TechNavBarProps> = ({ setItemsActive }) => {
    interface ButtonsState {
        launchVehicleBtState: string;
        spacePortBtState: string;
        spaceCapsuleBtState: string;
    }

    const [buttonsState, setButtonsState] = useState<ButtonsState>({
        launchVehicleBtState: 'techNavBarBt techNavBarBt-active',
        spacePortBtState: 'techNavBarBt techNavBarBt-inactive',
        spaceCapsuleBtState: 'techNavBarBt techNavBarBt-inactive',
    });

    const { launchVehicleBtState, spacePortBtState, spaceCapsuleBtState } = buttonsState;

    /**
     * Changes the state of a button in the navigation bar.
     * @param {string} itemName - Name of the card to be displayed.
     */
    const handleClick = (itemName: string): void => {
        let newButtonsState: ButtonsState = {
            launchVehicleBtState: 'techNavBarBt techNavBarBt-inactive',
            spacePortBtState: 'techNavBarBt techNavBarBt-inactive',
            spaceCapsuleBtState: 'techNavBarBt techNavBarBt-inactive',
        }

        let newActiveItems: ActiveItems = {
            launchVehicleActive: false,
            spacePortActive: false,
            spaceCapsuleActive: false,
        }

        setItemsActive({...newActiveItems,[`${itemName}Active`]:true});
        setButtonsState({ ...newButtonsState, [`${itemName}BtState`]: 'techNavBarBt techNavBarBt-active' });
        
    }

    return (
        <nav id="technologyNavBar">
            <div className={launchVehicleBtState} onClick={() => handleClick('launchVehicle')}>1</div>
            <div className={spacePortBtState} onClick={() => handleClick('spacePort')}>2</div>
            <div className={spaceCapsuleBtState} onClick={() => handleClick('spaceCapsule')}>3</div>
        </nav>
    )
}
export default TechnologyNavBar;