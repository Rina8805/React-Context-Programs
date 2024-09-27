import { useContext } from "react";
import { context } from "../Parent";

function Profile(props)
{
     const data = useContext(context);

     return(
        <div style={{backgroundColor:'aqua', width:'300px', height:'200px', borderRadius:360, padding:'40px'}}>

        Profile <br/>
        username :- {data.username}<br/>
        age :- {data.age}<br/>
        designation :- {data.userRole}<br/>
        address :- {data.address}

        </div>
     )
}
export default Profile;