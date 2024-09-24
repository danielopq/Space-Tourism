import './technology.css'

const Technology: React.FC = () => {
    return (
        <div id="technology" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>03 </span>
                <span className='sectionTitle'>SPACE LAUNCH 101</span>
            </div>
            <div id="technologyMain">
                <div className='technologyMainText'>
                    <p className='technologyHeader'>THE TERMINOLOGY...</p>
                    <p className='technologyTerm'>LAUNCH VEHICLE</p>
                    <p className='technologyDescription'>
                    A space capsule is an often-crewed spacecraft that uses a blunt-body
                     reentry capsule to reenter the Earth's atmosphere without wings. 
                     Our capsule is where you'll spend your time during the flight. 
                     It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                    </p>
                </div>
                <div className='technologyPic'></div>
            </div>
        </div>
    )
}
export default Technology