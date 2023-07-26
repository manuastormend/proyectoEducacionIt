import React, { useEffect, useState } from 'react';



function Menu({desplegar,setDesplegar}){

    const [click,setClick] = useState(false);

    function MenuDesplegar(){
        setDesplegar(!desplegar);
    }

    useEffect(()=>{
        if (click){
            MenuDesplegar()
            setClick(false)
        }
    })

    return <div className="col-lg-0 col-md-0 col-sm-9 col-xs-6 menu">
        <span onClick={(e)=>{setClick(true)}}><i className="fas fa-bars fa-xl col-lg-0 col-md-0"></i></span>
    </div>
}

export default Menu;