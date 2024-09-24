import './crewNavBar.css';

const CrewNavBar:React.FC = ()=>{
    return(
        <nav id="crewNavbar">
            <div className='crewNavBarButton crewNavBarButtonInactive'></div>
            <div className='crewNavBarButton crewNavBarButtonActive'></div>
            <div className='crewNavBarButton crewNavBarButtonActive'></div>
            <div className='crewNavBarButton crewNavBarButtonActive'></div>
        </nav>
    )
}
export default CrewNavBar