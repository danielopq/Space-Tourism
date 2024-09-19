import './navBar.css';

const NavBar = () => {
    return (
        <nav>
            <div id="navBarLeft">
                <div id="logo"></div>
                <div id="navBarline"></div>
            </div>
            <div id="navBarRight">
                <div className='navbarSectionLink inactive'><span className='sectionNumber'>00</span><span className='sectionName'> HOME</span></div>
                <div className='navbarSectionLink active'><span className='sectionNumber'>01</span><span className='sectionName'> DESTINATION</span></div>
                <div className='navbarSectionLink active'><span className='sectionNumber'>02</span><span className='sectionName'> CREW</span></div>
                <div className='navbarSectionLink active'><span className='sectionNumber'>03</span><span className='sectionName'> TECHNOLOGY</span></div>
            </div>
        </nav>
    )
}

export default NavBar