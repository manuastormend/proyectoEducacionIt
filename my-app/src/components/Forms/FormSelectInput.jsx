import { useEffect, useState } from "react";
import Select from 'react-select'

function FormSelectInput ({label, options, className, error, setError, valor, setValor})  {

    const [clase, setClase] = useState(className);

    useEffect(()=>{
        if (error){
            setClase(className+" form-error")
        }else{
            setClase(className)
        }

    })


    return <>
        <label >{label} <span>{error}</span></label>

        <Select className={clase} onChange={(e)=>setValor(e)} options={options} placeholder={""}/>
    </>
};

export default FormSelectInput;