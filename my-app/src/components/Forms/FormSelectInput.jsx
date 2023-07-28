import { useContext, useEffect, useState } from "react";
import Select from 'react-select'
import contextService from "../../services/context.service";
import validacionService from "../../services/validacion.service";

function FormSelectInput ({label, options, className, error, propiedad, ctxType})  {

    /////--------Context related---------//////
    let metodo = contextService.metodo(propiedad)
    let setErrorName = contextService.setError(propiedad)
    const selectedContext = contextService.select(ctxType)
    const ctx = useContext(selectedContext)
    /////-------------------------------//////

    const [clase, setClase] = useState(className);

    /////--------Error related---------//////
    function resolveError() {
        return new Promise(resolve => {
            let error = validacionService.regexp(ctx[propiedad],propiedad)
            if (ctx.firstSubmit)
                if (!error)
                    error = validacionService.obligatorio(ctx[propiedad],propiedad);
            resolve(error)
        });
        }
    async function asyncError() {
        const result = await resolveError();
        ctx[setErrorName](result)
    }
    /////-------------------------------//////

    useEffect(()=>{
        if (validacionService.pertenece(propiedad)){

            //El error en los campos vacios solo aparece si ya se envió el formulario 
            asyncError()

            //Pone la clase de error si es que hay uno
            if (error){
                setClase(className+" form-error")
            }else{
                setClase(className)
            }
        }

    },[ctx])

    useEffect(()=>{
        if (ctx.firstSubmit){
            asyncError()
        }
    },[ctx.firstSubmit])

    return <>
        <label >{label} <span>{error}</span></label>

        <Select className={clase} onChange={(e)=>ctx[metodo](e.value)} options={options} placeholder={""}/>
    </>
};

export default FormSelectInput;