import { useEffect, useState } from "react";

function FormTextareaInput ({label, placeholder, className, error, valor, setValor,rows})  {

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
        <textarea className={clase} name="textarea" value={valor} onChange={(e)=>setValor(e.currentTarget.value)} id="mensaje"  rows={rows}></textarea>
    </>
};

export default FormTextareaInput;