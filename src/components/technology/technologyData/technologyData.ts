import spaceVehiclePortrait from '../img/image-launch-vehicle-portrait.jpg';
import spacePortPortrait from '../img/image-spaceport-portrait.jpg';
import spaceCapsulePortrait from '../img/image-space-capsule-portrait.jpg';

import spaceVehicleLandscape from '../img/image-launch-vehicle-landscape.jpg';
import spacePortLandscape from '../img/image-spaceport-landscape.jpg';
import spaceCapsuleLandscape from '../img/image-space-capsule-landscape.jpg';

interface Item{
    itemName: string,
    description:string,
    portraitPicPath:string,
    landScapePicPath:string,
}

interface ItemsList{
    [item:string]:Item;
}

const technologyData:ItemsList = {
    launchVehicle:{
        itemName: 'LAUNCH VEHICLE',
        description:'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
        portraitPicPath:spaceVehiclePortrait,
        landScapePicPath:spaceVehicleLandscape,
    },
    spacePort:{
        itemName: 'SPACEPORT',
        description:'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        portraitPicPath:spacePortPortrait,
        landScapePicPath:spacePortLandscape,
    },
    spaceCapsule:{
        itemName: 'SPACE CAPSULE',
        description:'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        portraitPicPath:spaceCapsulePortrait,
        landScapePicPath:spaceCapsuleLandscape,
    },

}
export default technologyData;