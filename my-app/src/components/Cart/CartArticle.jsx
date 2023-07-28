import { useState } from "react";
import { useNavigate } from "react-router";
import cartService from "../../services/cart.service";
import { toast } from "react-toastify";
import Toast from "../Toast/Toast";

function CartArticle({producto,items,setItems}){

    const [cantidad,setCantidad] = useState(producto.cantidad);
    const [errorCantidad, setErrorCantidad] = useState(false);
    const [hover, setHover] = useState('');
    let descripcionCorta = ''

    if (producto.descripcion.length>150){
        descripcionCorta = producto.descripcion.substring(0,150)+"...";
    }else{
        descripcionCorta = producto.descripcion
    }

    const nav = useNavigate();
    function handleChangeCantidad(valor){
        
        if (valor>=1){
            setCantidad(valor)
            cartService.add(producto.id,valor)
            setErrorCantidad(false)
        }else{
            setErrorCantidad(true)
            setTimeout(() => {
                setErrorCantidad(false)
            }, 2500);
            
        }
    }

    function eliminar(e){
        e.preventDefault()
        cartService.delete(producto.id)
        let res = items.filter((p)=>p.id!=producto.id);
        setItems(res)

        if (!cartService.productById(producto.id))
            toast.info(`Se eliminó correctamente el producto "${producto.nombre}"`)
    }

    function onClick(){
        nav(`/detalle/${producto.id}`)
    }

    return <>
        <article  onMouseLeave={(e)=>setHover('')}onMouseEnter={(e)=>setHover("carthover")} className={`product-article ${hover}`}>
            <div className="product-article-img-container col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <img
                    className="product-article-img"
                    src={`./img/productos/${producto.imagen}`}
                    alt={producto.alt}
                />
            </div>
            <div className="product-article-info col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p className="product-article-title">{producto.nombre.toUpperCase()}</p>
                <p className="product-article-precio" >Precio total: <span>US$ ${producto.precio*cantidad}</span></p>
                <p className="product-article-cantidad">Cantidad: <input type="number" value={cantidad} onChange={(e)=>handleChangeCantidad(e.currentTarget.value)}/>{errorCantidad ? <span>Cantidad inválida</span>: null}</p>
                <div>{descripcionCorta}</div>
            </div>
            <div className="product-article-buttons col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <button style={{color:"white","backgroundColor":'#f85858'}}className={"product-article-button"} onClick={onClick}>Inspeccionar</button>
            <button className={"product-article-button"} onClick={(e)=>eliminar(e)}>Eliminar</button>
            </div>
            <Toast></Toast>
        </article>
    </>
            
}

export default CartArticle;