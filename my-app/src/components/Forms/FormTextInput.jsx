import { useContext, useEffect, useState } from "react";
import contextService from "../../services/context.service";
import validacionService from "../../services/validacion.service";


function FormTextInput ({label, placeholder, className, propiedad, ctxType})  {

    /////--------Context related---------//////
    let metodo = contextService.metodo(propiedad)
    let setErrorName = contextService.setError(propiedad)
    let errorName = contextService.error(propiedad)
    const selectedContext = contextService.select(ctxType)
    const ctx = useContext(selectedContext)
    /////-------------------------------//////

    const [clase, setClase] = useState(className);
    const [input, setInput] = useState(ctx[propiedad] ? ctx[propiedad]: '');

    /////--------Error related---------//////
    function resolveError() {
        return new Promise(resolve => {
            let error = validacionService.regexp(ctx[propiedad],propiedad,ctxType)
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

            //Setea la propiedad en el ctx
            if (ctx[propiedad]==null){
                setInput('')
            }
            ctx[metodo](input)
        
            //El error en los campos vacios solo aparece si ya se envió el formulario 
            asyncError()

            //Pone la clase de error si es que hay uno
            if (ctx[errorName]){
                setClase(className+" form-error")
            }else{
                setClase(className)
            }
        }
        
    },[input,ctx])

    useEffect(()=>{
        if (ctx.firstSubmit){
            asyncError()
        }
    },[ctx.firstSubmit])


    return <>

        <label>{label} <span >{ctx[errorName]}</span></label>
        <input className={clase} type="text"  placeholder={placeholder} value={input} onChange={(e)=>setInput(e.currentTarget.value)}></input>
 
    </>
};

export default FormTextInput;