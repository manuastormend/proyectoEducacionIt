import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProductService from "../services/product.service";
import { toast } from "react-toastify";
import Toast from "../components/Toast/Toast";
const Alta = () => {


    const [nombre,setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [marca, setMarca] = useState('');
    
    const context = {
        
    }

    function onclick(){
        toast.info("Esta función no está desarrollada!")
    }
    return <>


        <MainLayout>

            <div className="alta-form__div">
                <form onSubmit={(e)=>e.preventDefault()}className="alta-form">
                    <h1 className="alta-form__title">DA DE ALTA UN PRODUCTO</h1>
                    <label>Nombre: </label>
                    <input className="alta-form__input" type="text"  placeholder=""></input>
                    <br></br>

                    <label>Precio: </label>
                    <input className="alta-form__input" type="email" placeholder=""></input>
                    <br></br>

                    <label>Stock:</label>
                    <input className="alta-form__input" type="tel" maxlength="15"  placeholder=""></input>
                    <br></br>

                    <label>Marca:</label>
                    <input className="alta-form__input" type="tel" maxlength="15"  placeholder=""></input>
                    <br></br>

                    <label></label>
                    <input className="alta-form__input" type="tel" maxlength="15"  placeholder=""></input>
                    <br></br>

                    <label >Categoría:</label>
                    <select  >
                        <option value="">Videojuego</option>
                        <option value="">Computadora</option>
                        <option value="">Celular</option>
                        <option value="">Otro</option>
                    </select>


                    <br></br>
                    <label >Descripción corta</label>
                    <textarea   rows="5"></textarea>
                    <br></br>

                    <label >Descripción larga</label>
                    <textarea   rows="10"></textarea>
                    <br></br>

                    <label>Edad desde:</label>
                    <input className="alta-form__input" type="tel" maxLength="15"  placeholder=""></input>
                    <br></br>

                    <label>Edad hasta:</label>
                    <input className="alta-form__input" type="tel" maxLength="15"  placeholder=""></input>
                    <br></br>
        
                    <label id="labelEnviar"></label>
                    <button  onClick={(e)=>onclick()} className="alta-form__button">Enviar</button>
                </form>
            </div>
            <Toast></Toast>
        </MainLayout>
        
    </>
};
export default Alta;