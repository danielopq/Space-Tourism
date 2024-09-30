import { useEffect, useState } from 'react';
import './terminologyCard.css';

interface Item{
    itemName:string,
    description:string,
    portraitPicPath:string,
    landScapePicPath:string,
}

interface TerminologyCardProps{
    item:Item;
    active:boolean;
    index:number;
}

/**
 * Component that contains a terminology card.
 * @param param0 - item: terminology item to be displayed; active: indicates whether it should be displayed or not; index: z-index of the card.
 * @returns {JSX.Element} - Terminology card component. 
 */
const TerminologyCard: React.FC<TerminologyCardProps> = ({item,active,index}) => {
    const {itemName,description,portraitPicPath,landScapePicPath} = item;
    const [cardOpacity,setCardOpacity] = useState<number>(0); //component opacity
    let windowWidth: number = window.innerWidth; //window width

    const [cardPicture,setCardpicture] = useState<string>(portraitPicPath); //Controls which picture size is displayed depending on the window size.

    /**
     * Sets up the picture size depending on the window size.
     */
    const setUpPictureSize = ():void=>{
        windowWidth = window.innerWidth;
        (windowWidth >= 768 && windowWidth <= 1024 ) ? setCardpicture(landScapePicPath) : setCardpicture(portraitPicPath);
    }

    //Sets up the initial picture size and adds and event listener to the window.
    useEffect(()=>{
        setUpPictureSize();
        window.addEventListener('resize',setUpPictureSize);
    },[])

    //Sets the component's opacity depending on the 'active' state.
    useEffect(()=>{
        active ? setCardOpacity(1) : setCardOpacity(0);
    },[active]);

    return (
        <div className="technologyMain" style={{opacity:`${cardOpacity}`,zIndex:`${index}`}}>
            <div className='technologyMainText'>
                <p className='technologyHeader'>THE TERMINOLOGY...</p>
                <p className='technologyItem'>{itemName}</p>
                <p className='technologyDescription mainText'>{description}</p>
            </div>
            <div className='technologyPic' style={{ backgroundImage: `url(${cardPicture})` }}></div>
        </div>
    )
}
export default TerminologyCard;