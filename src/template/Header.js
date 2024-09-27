import { useContext } from "react";
import { context } from "../Parent";
import Profile from "./Profile";
import '../style/Home.css';


function Header()
{
    const data = useContext(context)

    return(
        <div className="header-box">Header
        <h1 style={{color:'red'}}>{data.username}</h1>
        <img src="pic.jpeg" width='250px' height='200px'/>
        <Profile/>
        </div>
    )
}
export default Header;