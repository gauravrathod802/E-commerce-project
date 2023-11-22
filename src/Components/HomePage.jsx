import { useContext } from "react"
import { MyContext } from "../Context/AuthContext"
import "./Styles/HomePage.css"
import { GoSignIn } from "react-icons/go";

import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const { state, Logout } = useContext(MyContext)
    const router=useNavigate();
    console.log(state, "state")
    function gotoLogin(){
        router('/login')
    }

    const myLogout=()=>{
        Logout()
        alert("Logout sucessful !!!")
    }
    return (
        <div>
        <div className="nav">
            {/* <div className="nav_icon"><FaUserCircle /></div> */}
            <div className="logo"><div className="nav_icon"></div></div>
            
            <div className="nav_text">Welcome {state?.user?.name}</div>

           {state?.user? <div className="logout"><FiLogOut onClick={myLogout}/></div>
           :
           
           <div className="login_button"><GoSignIn onClick={gotoLogin}/></div>}

            {/* <div className="logout"><FiLogOut onClick={myLogout}/></div> */}
        </div>
        <div className="home">
        <h1>Products</h1>
        </div>
        </div>
    )
}
export default HomePage;