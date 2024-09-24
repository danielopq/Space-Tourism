import './crewMember.css';

interface CrewMemberProps{
    name:string,
    rank:string,
    description:string,
    picPath:string
}

const CrewMember: React.FC<CrewMemberProps> = ({name,rank,description,picPath}) => {
    return (
        <div className="crewMain">
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