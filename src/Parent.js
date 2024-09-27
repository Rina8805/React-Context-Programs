import { createContext} from "react"
import Header from "./template/Header";
import Footer from "./template/Footer";
import Sidenav from "./template/Sidenav";
import './style/Home.css';

export const context = createContext();

function Parent()
{
     const data ={
        username:"ABC",
        age:26,
        userRole:"Admin",
        address:"Pune"
     }

     return <div className="parent-box">
        <h1>Parent Component</h1>
        <context.Provider value={data}>
            <Header/>
            <Sidenav/>
            <Footer/>
        </context.Provider>
     </div>

}
export default Parent;