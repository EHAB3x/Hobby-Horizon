import { useParams } from 'react-router-dom'
import { getHobbyDetails } from '../../firebase/functions/getHobbyDetails';
import HobbyDetails from '../../components/hobbyDetails/HobbyDetails';
import { useEffect, useState } from 'react';

const HobbyPage = () => {
    const {hobbyName} = useParams();
    const [hobby,setHobby] =useState({})
    useEffect(()=>{
        getHobbyDetails(hobbyName)
        .then(res => setHobby(res))
    },[hobbyName])
  return (
    <div>
        <HobbyDetails hobbyDetails={hobby}/>
    </div>
  )
}

export default HobbyPage