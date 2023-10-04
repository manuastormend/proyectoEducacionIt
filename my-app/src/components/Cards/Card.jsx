import { Link, useNavigate } from "react-router-dom";
import Fav from "../Fav/Fav";

function Card({producto,id}){

    let nav = useNavigate();
    function onClick(){
        nav(`/detalle/${producto.id}`)
    }
    return <>
        <div className="card">
            <article className="card__article">
                <div onClick={(e)=>onClick()} className="card__image-container">
                <img
                    className="card__image"
                    src={`./img/productos/${producto.imagen}`}
                    alt={producto.alt}
                />
                </div>
                <div className="card__content">
                    <div className="card__headingfav">
                        <h2 className="card__heading">{producto.nombre ? producto.nombre: null}</h2>
                        <p className="card__fav"><Fav></Fav></p>
                    </div>
                    <p className="card__precio">US$ {producto.precio}</p>
                </div>

                
            </article>

        </div>
            

    </>

}

export default Card;


