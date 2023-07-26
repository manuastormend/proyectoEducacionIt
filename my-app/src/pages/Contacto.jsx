import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Select from 'react-select'
import { ToastContainer, toast } from "react-toastify";
import  Toast  from "./../components/Toast/Toast";


function validar(){

    let error = 'xd'
    return error;
}

const Contacto = () => {

    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [telefono,setTelefono] = useState('');
    const [tipoConsulta,setTipoConsulta] = useState(0);
    const [consulta,setConsulta] = useState('');

    const [error,setError] = useState('');

    const options = [
        { value: 1, label: 'Consulta general' },
        { value: 2, label: 'Soporte técnico' },
        { value: 3, label: 'Información de productos' },
        { value: 4, label: 'Otros' }
      ]


    function submit(){

        console.log("Nombre",nombre);
        console.log("Email",email);
        console.log("Telefono",telefono);
        console.log("Tipo Consulta",tipoConsulta);
        console.log("Consulta",consulta);

        if (error){
            //Muestra el error
            setError(error);
        }else{

            toast.info("Enviado correctamente!");
            //Modal de que se mando el coso
        }
    }

    function handleTipoConsulta(e){
        setTipoConsulta(e.value);
    }


    return <>

        {error ? console.log('hay un error'):console.log('no hay un error')}
        <MainLayout>
            
            <div className="contacto-container">
                <p className="contacto-text">¿Tienes alguna pregunta, consulta o simplemente quieres compartir tus comentarios con nosotros? Estamos aquí para ayudarte. <br></br>  En PixelMania valoramos la comunicación con nuestros clientes y nos esforzamos por brindar respuestas rápidas y soluciones efectivas. Ponte en contacto con nosotros completando el formulario a continuación. <br></br>Nos comprometemos a responder a tu mensaje en un plazo máximo de 24 horas hábiles. <br></br>Si prefieres un contacto más directo, también puedes llamarnos al +598 12345678 o enviarnos un correo electrónico a info@pixelmania-uruguay.com.¡Esperamos con ansias poder atenderte y brindarte una experiencia excepcional en PixelMania!</p>

                <div className="contacto-form__div">
                    <form className="contacto-form" onSubmit={(e)=>e.preventDefault()}>
                        <h1 className="contacto-form__title">FORMULARIO DE CONTACTO</h1>
                        <label>Ingrese su nombre: </label>
                        <input className="contacto-form__input" type="text"  placeholder="Escriba su nombre completo" value={nombre} onChange={(e)=>setNombre(e.currentTarget.value)}></input>
                        <br></br>

                        <label>Ingrese su correo electronico: </label>
                        <input className="contacto-form__input" type="email" placeholder="Escriba su correo correctamente" value={email} onChange={(e)=>setEmail(e.currentTarget.value)}></input>
                        <br></br>

                        <label>Ingrese su telefono:</label>
                        <input className="contacto-form__input" type="tel" maxLength="15"  placeholder="Ej:098765432" value={telefono} onChange={(e)=>setTelefono(e.currentTarget.value)}></input>
                        <br></br>
                        <label >Seleccione el tipo de consulta</label>

                        <Select  onChange={(e)=>handleTipoConsulta(e)} options={options} defaultValue={'Seleccione...'}/>
                        <br></br>
                        
                        <label>Agregue su consulta</label>
                        <textarea value={consulta} onChange={(e)=>setConsulta(e.currentTarget.value)} id="mensaje"  rows="10"></textarea>
                        <br></br>
            
                        <label id="labelEnviar"></label>
                        <button onClick={submit} className="alta-form__button"><a >Enviar</a></button>
                    </form>
                </div>
            </div>
            <Toast></Toast>
        </MainLayout>
    </>
};
export default Contacto;