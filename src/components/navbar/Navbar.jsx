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
    IoBusinessOutline
} from "react-icons/io5";
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
const Navbar = () => {
    const {user} = useAuth();
    console.log(user);
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links">
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
        </div>
    </nav>
  )
}

export default Navbar