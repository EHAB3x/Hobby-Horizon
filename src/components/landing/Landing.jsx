import { useAuth } from '../../context/AuthContext'
import './landing.css'
import landingImg from "../../assets/landing_1.jfif";
const Landing = () => {
    const {user} = useAuth();
    console.log(user);
  return (
    <section className="landing">
        <div className="landing__welcome">
            <h3>Welcome, {user == null ?" Guest" : user.displayName}</h3>
            <p>What would you like to do today?</p>
        </div>
        <div className="landing__content">
            <div className="left">
                <div className="landing__left-details">
                    <h2>Hobby Horizon</h2>
                    <p>Here you can find your passion.</p>
                </div>
                <div className="landing__left-button">
                    <a href="#categories">Explore Categories</a>
                </div>
            </div>
            <span></span>
            <div className="right">
                <img src={landingImg} alt="landing-img" />
            </div>
        </div>
    </section>
  )
}

export default Landing