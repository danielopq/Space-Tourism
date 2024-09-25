import './TechnologyNavBar.css';

const TechnologyNavBar:React.FC = ()=>{
    return(
        <nav id="technologyNavBar">
            <div className='techNavBarBt techNavBarBt-active'>1</div>
            <div className='techNavBarBt techNavBarBt-inactive'>2</div>
            <div className='techNavBarBt techNavBarBt-inactive'>3</div>
        </nav>
    )
}
export default TechnologyNavBar;