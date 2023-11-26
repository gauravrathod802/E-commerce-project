import { useNavigate } from 'react-router-dom';
import './Styles/Navbar.css'
import { useContext } from 'react';
import { MyContext } from '../Context/AuthContext';
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { GoSignIn } from "react-icons/go";
import { IoSearch } from "react-icons/io5";


function Navbar() {
    const { Logout, state } = useContext(MyContext);
    const router = useNavigate();
    return (
        <div id="navbar">
            {/* one */}
            <div onClick={() => router('/')} className='nav-first'></div>

            {/* two */}
            <div className='nav-second'>
                <div onClick={() => router('/mens')} >MEN</div>
                <div onClick={() => router('/womens')} >WOMEN</div>
                <div onClick={() => router('/kids')} >KIDS</div>
                <div onClick={() => router('/electronics')} >ELECTRONICS</div>
            </div>

            {/* three */}
            <div class="nav-search">
                <select class="search-select">
                    <option>All</option>
                </select>
                <input placeholder="Search for products, brands and more" class="search-input"/>
                <IoSearch style={{color:'white',fontSize:'35px',paddingLeft:'5px',paddingRight:'5px',paddingTop:'1px',cursor:'pointer'}}/>

            </div>

            {/* four */}
            <div className='nav-fourth'>
                {state?.user?.name ?
                    <div className='first-profile'>
                        <div className='profile-icon'>
                            <FaUserCircle />
                            <div className="profile-name">
                                {state?.user?.name}
                            </div>
                        </div>
                        <div className="nav-logout">
                            <div onClick={Logout}className="logout-logo"><FiLogOut /></div>
                            <div onClick={Logout}>Logout</div>
                        </div>


                    </div>
                    :
                    <div className="second-login">
                        <div onClick={() => router('/login')} className="login-logo"><GoSignIn/></div>
                        <div onClick={() => router('/login')}>Login</div>
                    </div>
                }

                <div className="cart">
                    <div onClick={() => router('/cart')} className="cart-logo"><FaCartShopping /></div>
                    <div>Cart</div>
                </div>

            </div>
        </div>
    )
}
export default Navbar;