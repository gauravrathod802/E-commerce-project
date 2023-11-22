import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/AuthContext";
import './Styles/Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Login() {
    const { state, Login } = useContext(MyContext);
    const router = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "" })
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const LS = JSON.parse(localStorage.getItem("USER_DB"));
            for (var i = 0; i < LS.length; i++) {
                if (LS[i].email === userData.email && LS[i].password === userData.password) {
                    localStorage.setItem("Logged_In_User",JSON.stringify({email:LS[i].email}))
                    Login({ name: LS[i].name, email: LS[i].email })
                    setUserData({ email: "", password: "" })
                    router("/")
                    return alert("Login successful !!!")
                }
            }
            return alert("Please check your credentials.")

        } else {
            alert("Please fill all details.")
        }
    }
    function gotoRegister(){
        router('/register')
    }
    useEffect(()=>{
        if(state?.user?.name){
            router('/')
        }
    },[state])

    return (
        <div className="login">
            <form className="my-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label><br />
                <input className="input" type="text" id="email" onChange={handleChange} name='email' required value={userData.email} placeholder="enter email" /><br />
                <label htmlFor="password">Password</label><br />
                <input className="input" type="password" id="password" onChange={handleChange} required name='password' value={userData.password} placeholder="enter password"/><br />
                <input className="submit" type="submit" value="Login" />

                <p>Don't have an account?<button className="not-account" onClick={gotoRegister}>register here</button></p>
                <div className="register-icon">
                <FcGoogle />
                <FaFacebook style={{color:"#316FF6"}}/>
                <FaTwitter style={{color:" #1DA1F2"}}/>
                </div>
            </form>
        </div>
    )
}
export default Login;