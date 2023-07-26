import { Link } from "react-router-dom";

function Card({producto}){


    return <>
        <Link to={`/detalle/${producto.id}`} className="card col-lg-2 col-md-3 col-sm-4 col-xs-12">
            <article className="card__article">
                <div className="card__image-container">
                <img
                    className="card__image"
                    src={`./img/productos/${producto.imagen}`}
                    alt={producto.alt}
                />
                </div>
                <div className="card__content">
                <h2 className="card__heading">{producto.nombre}</h2>
                <div className="card__description">
                    <p>
                    
                    </p>
                </div>
                </div>
                <div className="card__footer">
                    <p>US$ {producto.precio}</p>
                </div>
            </article>
        </Link>
    </>

}

export default Card;


