import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import  Toast  from "./../components/Toast/Toast";
import FormTextareaInput from "../components/Forms/FormTextareaInput";
import FormSelectInput from "../components/Forms/FormSelectInput";
import FormTextInput from "../components/Forms/FormTextInput";
import ContactoContext from "../context/ContactoContext"



const Contacto = () => {

    /////--------Inicializacion----------////

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [telefono,setTelefono] = useState('');
    const [tipoconsulta,setTipoconsulta] = useState(0);
    const [consulta,setConsulta] = useState('');

    const options = [
        { value: 1, label: 'Consulta general' },
        { value: 2, label: 'Soporte técnico' },
        { value: 3, label: 'Información de productos' },
        { value: 4, label: 'Otros' }
      ]

    const [errorNombre,setErrorNombre] = useState(null);
    const [errorEmail,setErrorEmail] = useState(null);
    const [errorTelefono,setErrorTelefono] = useState(null);
    const [errorTipoconsulta,setErrorTipoconsulta] = useState(null);
    const [errorConsulta,setErrorConsulta] = useState(null);


    const [submit,setSubmit] = useState(false);
    const [firstSubmit, setFirstSubmit] = useState(false);

    const context = {
        nombre,
        setNombre,
        errorNombre,
        setErrorNombre,
        email,
        setEmail,
        errorEmail,
        setErrorEmail,
        telefono,
        setTelefono,
        errorTelefono,
        setErrorTelefono,
        tipoconsulta,
        setTipoconsulta,
        errorTipoconsulta,
        setErrorTipoconsulta,
        consulta,
        setConsulta,
        errorConsulta,
        setErrorConsulta,
        submit,
        setSubmit,
        firstSubmit,

    }
    
    /////--------Fin inicializacion----------////

    useEffect(()=>{
        if (submit){
            
            if (errorEmail || errorNombre || errorTelefono || errorTipoconsulta || errorConsulta){
                toast.error("Su consulta no puede ser enviada debido a que tiene campos incompletos y/o inválidos")
            }else{
    
                toast.info("Enviado correctamente!");
                setNombre(null)
                setEmail(null)
                setTelefono(null)
                setConsulta(null)
                setTipoconsulta(null)
                setFirstSubmit(false)
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
            <ContactoContext.Provider value={context}>
                <div className="contacto-container">
                    <p className="contacto-text">¿Tienes alguna pregunta, consulta o simplemente quieres compartir tus comentarios con nosotros? Estamos aquí para ayudarte. <br></br>  En PixelMania valoramos la comunicación con nuestros clientes y nos esforzamos por brindar respuestas rápidas y soluciones efectivas. Ponte en contacto con nosotros completando el formulario a continuación. <br></br>Nos comprometemos a responder a tu mensaje en un plazo máximo de 24 horas hábiles. <br></br>Si prefieres un contacto más directo, también puedes llamarnos al +598 12345678 o enviarnos un correo electrónico a info@pixelmania-uruguay.com.¡Esperamos con ansias poder atenderte y brindarte una experiencia excepcional en PixelMania!</p>

                    <div className="contacto-form__div">
                        <form className="contacto-form" onSubmit={(e)=>e.preventDefault()}>
                            <h1 className="contacto-form__title">FORMULARIO DE CONTACTO</h1>
                            
                            <FormTextInput label={"Ingrese su nombre:"} placeholder={"Escriba su nombre completo"} className={"contacto-form__input"} error={errorNombre} propiedad={"nombre"} ctxType={"contacto"}></FormTextInput>
                            <br></br>
                            <FormTextInput label={"Ingrese su correo electronico:"} placeholder={"Escriba su correo correctamente"} className={"contacto-form__input"} error={errorEmail} propiedad={"email"} ctxType={"contacto"}></FormTextInput>
                            <br></br>
                            <FormTextInput label={"Ingrese un número telefónico"} placeholder={"Ej:098765432"} className={"contacto-form__input"} error={errorTelefono} propiedad={"telefono"} ctxType={"contacto"}></FormTextInput>
                            <br></br>
                            <FormSelectInput label={"Seleccione el tipo de consulta:"} options={options} error={errorTipoconsulta} propiedad={"tipoconsulta"} ctxType={"contacto"}></FormSelectInput>
                            <br></br>

                            <FormTextareaInput label={"Agregue su consulta:"} error={errorConsulta} propiedad={"consulta"} ctxType={"contacto"} rows={10}></FormTextareaInput>
                            <br></br>

                            <label id="labelEnviar"></label>
                            <button onClick={submited} className="alta-form__button"><a >Enviar</a></button>
                        </form>
                    </div>
                </div>

            </ContactoContext.Provider>
            
            <Toast></Toast>
        </MainLayout>
    </>
};
export default Contacto;