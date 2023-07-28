import { useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import productos from "../assets/js/productos";
import cartService from "../services/cart.service";
import { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../components/Toast/Toast";


function DetalleDescripcion({descripcion}){

    return <>
        <div className="detalle-descripcion-container">
            <div className="detalle-descripcion">{descripcion}</div>
        </div>
        
    </>

    
}
const Detalle = () => {

    let {id} = useParams();

    let producto = productos.find((producto)=>producto.id == id);
    let nombre = producto.nombre.toUpperCase()
    let cuota = Math.trunc(producto.precio/12) + 1

    const [cantidad,setCantidad] = useState(1);

    function AgregarCarrito(){

        if (cantidad >= 1){
            cartService.add(id, cantidad)
            let msg = ''
            if (cantidad==1){
                msg = `Se agregó 1 unidad de "${producto.nombre}" a tu carrito de compras!"`
            }else{
                msg = `Se agregaron ${cantidad} unidades de "${producto.nombre}" a tu carrito de compras!`
            }
            toast.success(msg)
        }else{
            toast.error("La cantidad de producto no puede ser menor a 1")
        }

    }

    function Comprar(){
        toast.info("Esta función no está desarrollada!")
    }

    return <>

        <MainLayout>
            <div className="detalle">
                <div className="detalle-layout-1">
                    <div className="detalle-container-left col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="detalle-imagen-container">
                            <img className="detalle-imagen" src={`../img/productos/${producto.imagen}`}></img>
                        </div>
                        
                    </div>
                    <div className="detalle-container-right col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <p className="detalle-nombre">{nombre}</p>
                        
                        <p className="detalle-precio">US$ {producto.precio}  <span>12 cuotas de US$ {cuota}</span></p>
                        <label>Cantidad
                            <input value={cantidad} onChange={(e)=>setCantidad(e.currentTarget.value)}className="detalle-cantidad" type="number"></input>
                        </label>
                        
                        <hr/>
                        <DetalleDescripcion descripcion={producto.descripcion}></DetalleDescripcion>
                        
                        <div className="detalle-botones">
                            <button onClick={Comprar} className="boton-comprar">Comprar</button>
                            <button onClick={AgregarCarrito}className="boton-agregarCarrito">Agregar al carrito</button>
                        </div>
                    </div>
                </div>

            </div>
        
            <Toast></Toast>
        </MainLayout>
    </>
};
export default Detalle;