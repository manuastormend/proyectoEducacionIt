import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';
import Toast from '../Toast/Toast';
import { useState,useEffect } from 'react';



function Fav({}){

    
    const [tap, setTap] = useState(false);
    const [esFav, setEsFav] = useState(false);

    useEffect(()=>{
        if (tap){
            
            setEsFav(!esFav)
            setTap(false)
        }
    },[tap])

    return <>{esFav ? <span onClick={(e)=>setTap(true)}><FontAwesomeIcon  icon={faStar} style={{color: "#dfd13a",cursor:"pointer"}} /></span> 
    :   <span onClick={(e)=>setTap(true)}><FontAwesomeIcon icon={faStarRegular} style={{color: "#dfd13a",cursor:"pointer"}} /></span>}</>
        
    
   }

   export default Fav;
   