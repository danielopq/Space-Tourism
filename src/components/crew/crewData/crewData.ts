import douglasPic from '../img/image-douglas-hurley.webp';
import markPic from '../img/image-mark-shuttleworth.webp';
import victorPic from '../img/image-victor-glover.webp';
import anoushehPic from '../img/image-anousheh-ansari.webp';


interface Profile{
    name:string,
    rank:string,
    description:string,
    picPath:string
}

interface CrewList{
    [crewMenber:string]:Profile
}

const CrewData:CrewList = {
    DouglasHurley:{
            name:'DOUGLAS HURLEY',
            rank:'COMMANDER',
            description:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            picPath: douglasPic,
        },
    MarkShuttleworth:{
        name:'MARK SHUTTLEWORTH',
        rank:'MISSION SPECIALIST',
        description:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        picPath: markPic,
    },
    VictorGlover:{
        name:'VICTOR GLOVER',
        rank:'PILOT',
        description:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        picPath:victorPic,
    },
    AnoushehAnsari:{
        name:'ANOUSHEH ANSARI',
        rank:'FLIGHT ENGINEER',
        description:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        picPath: anoushehPic,
    },
}
export default CrewData;