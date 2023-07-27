import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { ToastContainer, toast } from "react-toastify";
import  Toast  from "./../components/Toast/Toast";
import FormTextInput from "../components/Forms/FormTextInput";
import {validacionEmail,validacionNombre,validacionTelefono,validacionConsulta,validacionTipoConsulta,} from "../services/validaciones.service";
import FormTextareaInput from "../components/Forms/FormTextareaInput";
import FormSelectInput from "../components/Forms/FormSelectInput";


const Contacto = () => {


    /////--------Inicializacion----------////

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [telefono,setTelefono] = useState('');
    const [tipoConsulta,setTipoConsulta] = useState(0);
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
    const [errorTipoConsulta,setErrorTipoConsulta] = useState(null);
    const [errorConsulta,setErrorConsulta] = useState(null);


    const [submit,setSubmit] = useState(false);
    
    /////--------Fin inicializacion----------////

    useEffect(()=>{
        if (submit){

            if (errorEmail || errorNombre || errorTelefono || errorTipoConsulta || errorConsulta){
                toast.error("Su consulta no puede ser enviada debido a que tiene campos incompletos y/o inválidos")
            }else{
    
                toast.info("Enviado correctamente!");
            }
            setSubmit(false)
        }

    },[submit])

    function submited(){

        console.log(tipoConsulta)
        setErrorNombre(validacionNombre(nombre));
        setErrorEmail(validacionEmail(email));
        setErrorTelefono(validacionTelefono(telefono));
        setErrorTipoConsulta(validacionTipoConsulta(tipoConsulta));
        setErrorConsulta(validacionConsulta(consulta));

        setSubmit(true);

    }

    function handleTipoConsulta(e){
        setTipoConsulta(e.value);
    }


    return <>

        <MainLayout>
            
            <div className="contacto-container">
                <p className="contacto-text">¿Tienes alguna pregunta, consulta o simplemente quieres compartir tus comentarios con nosotros? Estamos aquí para ayudarte. <br></br>  En PixelMania valoramos la comunicación con nuestros clientes y nos esforzamos por brindar respuestas rápidas y soluciones efectivas. Ponte en contacto con nosotros completando el formulario a continuación. <br></br>Nos comprometemos a responder a tu mensaje en un plazo máximo de 24 horas hábiles. <br></br>Si prefieres un contacto más directo, también puedes llamarnos al +598 12345678 o enviarnos un correo electrónico a info@pixelmania-uruguay.com.¡Esperamos con ansias poder atenderte y brindarte una experiencia excepcional en PixelMania!</p>

                <div className="contacto-form__div">
                    <form className="contacto-form" onSubmit={(e)=>e.preventDefault()}>
                        <h1 className="contacto-form__title">FORMULARIO DE CONTACTO</h1>
                        
                        <FormTextInput label={"Ingrese su nombre:"} placeholder={"Escriba su nombre completo"} className={"contacto-form__input"} error={errorNombre} setError={setErrorNombre} valor={nombre} setValor={setNombre}></FormTextInput>
                        <br></br>

                        <FormTextInput label={"Ingrese su correo electronico:"} placeholder={"Escriba su correo correctamente"} className={"contacto-form__input"} error={errorEmail} setError={setErrorEmail} valor={email} setValor={setEmail}></FormTextInput>
                        <br></br>

                        <FormTextInput label={"Ingrese su telefono:"} placeholder={"Ej:098765432"} className={"contacto-form__input"} error={errorTelefono} setError={setErrorTelefono} valor={telefono} setValor={setTelefono}></FormTextInput>
                        <br></br>

                        <FormSelectInput label={"Seleccione el tipo de consulta:"} options={options} error={errorTipoConsulta}setValor={handleTipoConsulta}></FormSelectInput>
                        <br></br>

                        <FormTextareaInput label={"Agregue su consulta:"} error={errorConsulta} valor={consulta} setValor={setConsulta} rows={10}></FormTextareaInput>
                        <br></br>

                        <label id="labelEnviar"></label>
                        <button onClick={submited} className="alta-form__button"><a >Enviar</a></button>
                    </form>
                </div>
            </div>
            <Toast></Toast>
        </MainLayout>
    </>
};
export default Contacto;