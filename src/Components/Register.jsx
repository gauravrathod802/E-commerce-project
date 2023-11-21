import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
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
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
                <label htmlFor="">Name</label><br />
                <input type="text" onChange={handleChange} name='name' required value={userData.name} /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" onChange={handleChange} name='email' required value={userData.email} /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" onChange={handleChange} name='password' required value={userData.password} /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
export default Register;