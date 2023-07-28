import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';
import Toast from '../Toast/Toast';



function Fav({i}){

    
    function setTap(){
        toast.info("Esta función no está desarrollada")
    }
    return <>
           <span onClick={(e)=>setTap()}><FontAwesomeIcon icon={faStarRegular} style={{color: "#dfd13a",cursor:"pointer"}} /></span>
    
            <Toast></Toast>
    </>
    
   }

   export default Fav;
   