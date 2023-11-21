import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/AuthContext";


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
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" onChange={handleChange} name='email' required value={userData.email} /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" onChange={handleChange} required name='password' value={userData.password} /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
export default Login;