import { useEffect, useState } from 'react';
import './terminologyCard.css';

interface Item{
    itemName:string,
    description:string,
    picPath:string,
}

interface TerminologyCardProps{
    item:Item;
    active:boolean;
    index:number;
}

const TerminologyCard: React.FC<TerminologyCardProps> = ({item,active,index}) => {
    const {itemName,description,picPath,} = item;
    const [cardOpacity,setCardOpacity] = useState<number>(0);

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
            <div className='technologyPic' style={{ backgroundImage: `url(${picPath})` }}></div>
        </div>
    )
}
export default TerminologyCard;