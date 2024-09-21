import './destination.css'

const Destination: React.FC = () => {
    return (
        <div id="destination" className='sectionFrame'>
            <div className='sectionHeader'>
                <span className='sectionNumber'>01 </span>
                <span className='sectionTitle'>PICK YOUR DESTINATION</span>
            </div>
            <div id="destinationMain">
                <div id="destinationPic"></div>
                <div id="destinationContent">
                    <nav id="destinationNavbar"></nav>
                    <h1 id="destinationPlanetName">Moon</h1>
                    <p id="destinationMainText">
                        See our planet as you’ve never seen it before. A perfect relaxing
                        trip away to help regain perspective and come back refreshed. While
                        you’re there, take in some history by visiting the Luna 2 and Apollo
                        11 landing sites.
                    </p>
                    <div id="destinationData">
                        <div id="destinationDistance">
                            <div>AVG. DISTANCE</div>
                            <div>384,400 km</div>
                        </div>
                        <div id="destinationTime">
                            <div>Est. travel time</div>
                            <div>3 days</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination