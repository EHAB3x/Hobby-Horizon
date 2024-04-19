import "./login.css"
import loginPic from "../../assets/signin.png"
import { FiFacebook } from "react-icons/fi";
import { LiaApple } from "react-icons/lia";
import { TbBrandGoogle } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../firebase/functions/signin";
const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const logMethods=[
        {name:"Facebook",svg: <FiFacebook size={24}/>},
        {name:"Icloud",svg: <LiaApple size={24}/>},
        {name:"Google",svg: <TbBrandGoogle size={24}/>},
    ];

    const handleSignIn = (e)=>{
        e.preventDefault();
        signIn(mail, password, navigate);
    }
  return (
    <div className="login">
        <div className="login__left">
            <img src={loginPic} alt="login-pic" />
        </div>
        <div className="login__right">
            <h3 className="form__title">Hi, Welcome back!</h3>
            <form>
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
                    <Link to={"/forget"} className="form__forget">Forget password?</Link>
                </div>

                <input 
                    type="submit"  
                    value="Sign In"
                    onClick={(e)=> handleSignIn(e)}
                />

                <div className="login__methods">
                    <p>Or sign in with:</p>
                    <div>
                        {logMethods.map((method, index)=>(
                            <Link to={`/${method.name}`} key={index}>
                                {method.svg}
                            </Link>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login