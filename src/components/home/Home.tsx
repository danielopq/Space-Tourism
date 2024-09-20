import './home.css'

//Home page

const Home:React.FC = () => {
    return (
        <main id="home">
            <div id="homeMainContent">
                <div id="homeText">
                    <p id="homeTextHeader">SO, YOU WANT TO TRAVEL TO</p>
                    <h1>SPACE</h1>
                    <p id="homeTextMain" className='mainText'>Let’s face it; if you want to go to space,
                         you might as well genuinely go to outer space and not hover kind of on the edge
                          of it. Well sit back, and relax because we’ll give you a truly out of this 
                          world experience!
                    </p>
                </div>
                <button id="homeExploreBt">EXPLORE</button>
            </div>
        </main>
    )
}

export default Home;