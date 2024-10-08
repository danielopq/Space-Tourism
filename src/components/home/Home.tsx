import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './home.css'

interface HomeProps{
    changeSection: (section:string)=>void;
}

/**
 * Home page
 * @param {Function(string):void} - Function passed by reference to navigate between sections. 
 * @returns {JSX.Element} - Component containing the home page.
 */
const Home:React.FC<HomeProps> = ({changeSection}) => {

    /*
     Displays and set up the home page. 
    */
    useEffect(()=>{
        changeSection('home');
    },[]);
    
    const navigate = useNavigate();

    /**
     * Navigates to the 'destination' section when the Explore button is pressed.
     */
    const handleClick = ()=>{
        navigate('/destination');
    }

    return (
        <div id="home">
                <div id="homeText">
                    <p id="homeTextHeader">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <p id="homeTextMain" className='mainText'>Let’s face it; if you want to go to space,
                         you might as well genuinely go to outer space and not hover kind of on the edge
                          of it. Well sit back, and relax because we’ll give you a truly out of this 
                          world experience!
                    </p>
                </div>
                <button id="homeExploreBt" onClick={handleClick}>EXPLORE</button>
            </div>
    )
}

export default Home;