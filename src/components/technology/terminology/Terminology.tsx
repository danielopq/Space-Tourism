import './terminology.css';

const Terminology: React.FC = () => {
    return (
        <div className="technologyMain">
            <div className='technologyMainText'>
                <p className='technologyHeader'>THE TERMINOLOGY...</p>
                <p className='technologyTerm'>LAUNCH VEHICLE</p>
                <p className='technologyDescription mainText'>
                    A launch vehicle or carrier rocket is a rocket-propelled
                    vehicle used to carry a payload from Earth's surface to
                    space, usually to Earth orbit or beyond. Our WEB-X carrier
                    rocket is the most powerful in operation. Standing 150 metres
                    tall, it's quite an awe-inspiring sight on the launch pad!
                </p>
            </div>
            <div className='technologyPic' style={{ backgroundImage: `url(./img/image-spaceport-portrait.jpg)` }}></div>
        </div>
    )
}
export default Terminology;