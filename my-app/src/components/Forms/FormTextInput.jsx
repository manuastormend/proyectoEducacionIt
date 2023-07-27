import { useEffect, useState } from "react";

function FormTextInput ({label, placeholder, className, error, setError, valor, setValor})  {

    const [clase, setClase] = useState(className);

    useEffect(()=>{
        if (error){
            setClase(className+" form-error")
        }else{
            setClase(className)
        }

    })


    return <>
        <label>{label} <span >{error}</span></label>
        <input className={clase} type="text"  placeholder={placeholder} value={valor} onChange={(e)=>setValor(e.currentTarget.value)}></input>
        
    </>
};

export default FormTextInput;