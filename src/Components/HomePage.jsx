import { useContext } from "react"
import { MyContext } from "../Context/AuthContext"
import "./Styles/HomePage.css"
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const { state } = useContext(MyContext)
    const router=useNavigate();
    console.log(state, "state")
    function gotoLogin(){
        router('/login')
    }
    return (
        <div>
        <div className="nav">
            <div className="nav_icon"><FaUserCircle /></div>
            <div className="nav_text">Welcome, {state?.user?.name}</div>
            <div className="logout"><FiLogOut onClick={gotoLogin}/></div>
        </div>
        <div className="home">
        <h1>Products</h1>
        </div>
        </div>
    )
}
export default HomePage;