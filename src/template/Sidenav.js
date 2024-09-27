import { useContext } from "react";
import { context } from "../Parent";
import Profile from "./Profile";
import '../style/Home.css';

function Sidenav()
{
    const data = useContext(context)

    return(
        <div className="sidenav-box">Sidenav
        <h1 style={{color:'red'}}>{data.userRole}</h1>
        
        </div>
    )
}
export default Sidenav;