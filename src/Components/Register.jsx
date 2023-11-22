import {  useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/Register.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MyContext } from "../Context/AuthContext";



function Register() {
    const {state}=useContext(MyContext)

    const router = useNavigate();
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    console.log(userData)
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            // try{
            //     const reponse= await axios.post("http://localhost:8000/register",{userData})
            //     if(response.data.success){
            //         alert("Registration Successful!!!")
            //     }
            // }catch(error){
            //     alert(error.response.data.message)
            // }

            const MyUsers = JSON.parse(localStorage.getItem("USER_DB")) || [];
            MyUsers.push(userData)
            localStorage.setItem("USER_DB", JSON.stringify(MyUsers))
            setUserData({
                name: "", email: "", password: ""
            })
            router("/login")
            alert("Registration Successful!!!")
        } else {
            alert("Please fill all the details...")
        }
    }
    function gotoRegister() {
        router('/login')
    }

    useEffect(()=>{
        if(state?.user?.name){
            router('/')
        }
    },[state])

    return (
        <div className="register">
            <form className="myForm"onSubmit={handleSubmit}>
            <h1>Register</h1>
                <label htmlFor="">Name</label><br />
                <input className="input_text" type="text" onChange={handleChange} name='name' required value={userData.name} placeholder="enter name"/><br />
                <label htmlFor="email">Email</label><br />
                <input className="input_text" type="email" id="email" onChange={handleChange} name='email' required value={userData.email} placeholder="enter email"/><br />
                <label htmlFor="password">Password</label><br />
                <input className="input_text"  type="password" id="password" onChange={handleChange} name='password' required value={userData.password} placeholder="enter password"/><br />
                <input className="button_register"type="submit" value="Register" />
                <p>Already have an account?<button className="already-account" onClick={gotoRegister}>login here</button></p>
                {/* <p>or</p> */}
                <div className="register-icon">
                <FcGoogle />
                <FaFacebook style={{color:"#316FF6"}}/>
                <FaTwitter style={{color:" #1DA1F2"}}/>
                </div>
            </form>
        </div>
    )
}
export default Register;