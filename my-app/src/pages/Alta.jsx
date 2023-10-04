import { useState , useEffect} from "react";
import MainLayout from "../layouts/MainLayout";
import AltaContext from "../context/AltaContext";
import { toast } from "react-toastify";
import Toast from "../components/Toast/Toast";
import FormTextInput from "../components/Forms/FormTextInput";
import FormTextareaInput from "../components/Forms/FormTextareaInput";
import validacionService from "../services/validacion.service";
import cardService from "../services/card.service";
import FormImageInput from "../components/Forms/FormImageInput";
const Alta = () => {

    /////--------Inicializacion----------////
    const [identificador, setIdentificador] = useState('')
    const [nombre,setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [stock, setStock] = useState('');

    const [errorIdentificador,setErrorIdentificador] = useState(null);
    const [errorNombre,setErrorNombre] = useState(null);
    const [errorPrecio,setErrorPrecio] = useState(null);
    const [errorDescripcion,setErrorDescripcion] = useState(null);
    const [errorImagen,setErrorImagen] = useState(null);
    const [errorStock,setErrorStock] = useState(null);


    const [submit,setSubmit] = useState(false);
    const [firstSubmit, setFirstSubmit] = useState(false);

    const context = {
        identificador,
        setIdentificador,
        errorIdentificador,
        setErrorIdentificador,
        nombre,
        setNombre,
        errorNombre,
        setErrorNombre,
        precio,
        setPrecio,
        errorPrecio,
        setErrorPrecio,
        descripcion,
        setDescripcion,
        errorDescripcion,
        setErrorDescripcion,
        imagen,
        setImagen,
        errorImagen,
        setErrorImagen,
        stock,
        setStock,
        errorStock,
        setErrorStock,
        submit,
        setSubmit,
        firstSubmit,

    }
    
    /////--------Fin inicializacion----------////

    useEffect(()=>{
        if (submit){
            
            if (errorIdentificador || errorNombre || errorPrecio || errorDescripcion || errorStock || errorImagen){
                toast.error("Su consulta no puede ser enviada debido a que tiene campos incompletos y/o inválidos")
            }else{
                
                cardService.all()
                .then((data) => {
                    if (data.find((p) => p.id == identificador)) {
                        toast.error("Su consulta no puede ser enviada debido a que el identificador ya está siendo usado por otro producto")
                    }else{
                        
                        cardService.new(identificador,nombre,precio,descripcion,"favicon.png",stock).then(res=>res.json()).then(data=>{
                            toast.info("Enviado correctamente!");
                            setNombre(null)
                            setIdentificador(null)
                            setDescripcion(null)
                            setPrecio(null)
                            setStock(null)
                            setImagen(null)
                            setErrorIdentificador(null)
                            setErrorDescripcion(null)
                            setErrorNombre(null)
                            setErrorPrecio(null)
                            setErrorImagen(null)
                            setErrorStock(null)
                            setFirstSubmit(false)
                        }).catch(e=>console.error(e))
                        
                
                    }
                });
                

            }
            setSubmit(false)
        }
    },[submit])

    async function submited() {

        await new Promise(resolve => {
            setFirstSubmit(true) 
            resolve("resolved")
        });
        await new Promise(resolve => {
            setSubmit(true) 
            resolve("resolved")
        });
    }

    return <>

        <MainLayout>
            <AltaContext.Provider value={context}>
                <div className="alta-form__div">
                    <form onSubmit={(e)=>e.preventDefault()}className="alta-form">
                        <h1 className="alta-form__title">DA DE ALTA UN PRODUCTO</h1>

                        <FormTextInput label={"Ingrese el número de identificación:"} placeholder={"Escriba un número que funcionará como identificador"} className={"contacto-form__input"} error={errorIdentificador} propiedad={"identificador"} ctxType={"alta"}></FormTextInput>
                        <br></br>
                        <FormTextInput label={"Ingrese el nombre:"} placeholder={"Escriba el nombre del producto"} className={"contacto-form__input"} error={errorNombre} propiedad={"nombre"} ctxType={"alta"}></FormTextInput>
                        <br></br>
                        <FormTextInput label={"Ingrese el precio:"} placeholder={"Escriba el precio en dólares (USD) del producto"} className={"contacto-form__input"} error={errorPrecio} propiedad={"precio"} ctxType={"alta"}></FormTextInput>
                        <br></br>

                        <FormTextareaInput label={"Ingrese una descripción:"} error={errorDescripcion} propiedad={"descripcion"} ctxType={"alta"} rows={10}></FormTextareaInput>
                        <br></br>
                        <FormTextInput label={"Ingrese el stock:"} placeholder={"Cantidad aproximada del producto en stock"} className={"contacto-form__input"} error={errorStock} propiedad={"stock"} ctxType={"alta"}></FormTextInput>
                        <br></br>
                        {/* <FormTextInput label={"Ingrese una imagen:"} placeholder={"Escriba la url de una imagen"} className={"contacto-form__input"} error={errorImagen} propiedad={"imagen"} ctxType={"alta"}></FormTextInput>
                        <br></br> */}
                        <FormImageInput label={"Ingrese una imagen:"} placeholder={"Escriba la url de una imagen"} className={"contacto-form__input"} error={errorImagen} propiedad={"imagen"} ctxType={"alta"}></FormImageInput>
                        
                        <label id="labelEnviar"></label>
                        <button  className="form__button form__button__grey" onClick={(e)=>submited()}>Enviar</button>
                    </form>
                </div>
            </AltaContext.Provider>
            <Toast></Toast>

        </MainLayout>
        
    </>
};
export default Alta;