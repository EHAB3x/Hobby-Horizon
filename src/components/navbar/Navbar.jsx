import './navbar.css'
import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { 
    IoHomeOutline,
    IoBrushOutline, 
    IoConstructOutline, 
    IoTrophyOutline ,
    IoBonfireOutline,
    IoBusinessOutline,
    IoAppsOutline
} from "react-icons/io5";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useState } from 'react';
const Navbar = () => {
    const {user} = useAuth();
    const [showToggle, setShowToggle] = useState(false);
    console.log(user);
  return (
    <nav className="navbar">
        <Link to="/" className="navbar__logo">
            <img src={logo} alt="logo" />
        </Link>
        <div className={`navbar__links ${showToggle ? "show" : ""}`}>
            <ul>
                <li>
                    <NavLink to="/">
                        <IoHomeOutline />   
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies">
                        <IoBrushOutline />
                        <span>Hobbies</span>    
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/events">
                        <IoBonfireOutline />
                        <span>Events</span>       
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/competitions">
                        <IoTrophyOutline />
                        <span>Competitions</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/workshops">
                        <IoConstructOutline />
                        <span>Workshops</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clubs">
                        <IoBusinessOutline />
                        <span>Clubs</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className="navbar__btns">
            {user
            ?<button onClick={()=>signOut(auth)}>Log out</button>
            : 
            <>
                <Link to="/signin">Log in</Link>
                <Link to="/register">Sign up</Link>
            </>
            }
            <span className="toggle" onClick={()=> setShowToggle(!showToggle)}>
                <IoAppsOutline size="24"/>
            </span>
        </div>
    </nav>
  )
}

export default Navbar