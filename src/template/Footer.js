import { useContext } from "react";
import { context } from "../Parent";
import Profile from "./Profile";
import '../style/Home.css';

function Footer()
{
    const data = useContext(context)

    return(
        <div className="footer-box">Footer
        <h1 style={{color:'red'}}>{data.address}</h1>
        
        </div>
    )
}
export default Footer;