import { useEffect, useState } from 'react'
import './addPhone.css'
import { CiSquareChevRight } from "react-icons/ci";
import { auth, db } from '../../firebase/firebase';
import { useAuth } from '../../context/AuthContext';
import ErrorToast from '../toasts/ErrorToast';
import SuccessToast from '../toasts/SuccessToast';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { runTransaction } from 'firebase/firestore';
import { getHobbyTypes } from '../../firebase/functions/getHobbyEvents';
import { updatePhone } from '../../firebase/functions/updatePhone';
const AddPhone = () => {
    const {user} = useAuth();
    const [phone, setPhone] = useState("");
    const updateUserPhone = ()=>{
        updatePhone("users", user.uid,phone)
    }
  return (
    <div className="addPhone">
        <input 
            type="text" 
            name="phone" 
            id="phone" 
            onChange={(e)=> setPhone(e.target.value)}
        />
        <CiSquareChevRight size="24" onClick={()=>updateUserPhone()}/>
    </div>
  )
}

export default AddPhone