import { useNavigate } from "react-router-dom";

const spaceTourismNavigation = (section:string):void=>{
    const navigate = useNavigate();
    section === "home" ? navigate('/') : navigate(`/${section}`);
}

export default spaceTourismNavigation;