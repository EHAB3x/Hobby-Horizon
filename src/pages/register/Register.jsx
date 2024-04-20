import { useState } from 'react';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import registerPic from "../../assets/signup.png"
import { register } from '../../firebase/functions/register';
const Register = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e)=>{
        e.preventDefault();
        register(name, mail, password, navigate);
    }
  return (
    <div className="login">
        <div className="login__left">
            <img src={registerPic} alt="login-pic" />
        </div>
        <div className="login__right">
            <h3 className="form__title">Create New Account</h3>
            <form>
                <div className="form__field">
                    <label htmlFor="email">User Name</label>
                    <input 
                        type="text" 
                        name="txt" 
                        id="txt"
                        placeholder="John Doe"
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="example@gmail.com"
                        onChange={(e)=> setMail(e.target.value)}
                    />
                </div>

                <div className="form__field">
                    <label htmlFor="pass">Password</label>
                    <input 
                        type="password" 
                        name="pass" 
                        id="pass"
                        placeholder="*****"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <input 
                    type="submit"  
                    value="Sign Up"
                    onClick={(e)=> handleSignUp(e)}
                />
                <p className="form__account">Have an account ? <Link to={"/signin"}>Sign in</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Register