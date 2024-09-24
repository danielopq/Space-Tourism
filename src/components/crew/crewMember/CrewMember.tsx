import { useEffect, useState } from 'react';
import './crewMember.css';

interface Profile{
    name:string,
    rank:string,
    description:string,
    picPath:string
}

interface CrewMemberProps{
    activeProfile:boolean;
    crewMenberProfile:Profile,
}

const CrewMember: React.FC<CrewMemberProps> = ({activeProfile,crewMenberProfile}) => {
    const { name, rank, description, picPath } = crewMenberProfile;
    const [crewMemberOpacity,setCrewMemberOpacity] = useState<number>(0);
    useEffect(()=>{ 
        setCrewMemberOpacity(activeProfile ? 1 : 0);
    },[activeProfile]);
    return (
        <div className="crewMain" style={{opacity:`${crewMemberOpacity}`}}>
            <div className='crewIntroduction'>
                <p className='crewRank'>{rank}</p>
                <p className='crewName'>{name}</p>
                <p className='crewDescription mainText'>{description}</p>
            </div>
            <div className='crewPicture' style={{ backgroundImage: `url(${picPath})` }}></div>
        </div>
    )
}
export default CrewMember;