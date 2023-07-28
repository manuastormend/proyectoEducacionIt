import { useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import productos from "../assets/js/productos";
import cartService from "../services/cart.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Toast from "../components/Toast/Toast";
import CartArticle from "../components/Cart/CartArticle";


const Carrito = () => {

    const [items,setItems] = useState([])
    if (items.length == 0)
        for (let i = 0; i < localStorage.length; i++){
            let clave = localStorage.key(i);
            items.push(JSON.parse(localStorage.getItem(clave)))
        }
    
    function Comprar(){
        toast.info("Esta función no está desarrollada!")
    }
    
    let mensaje = "No tienes ningún producto en el carrito :( Prueba añadiendo algunos! :)"
    return <>

        <MainLayout>
            <div className="cart">
                {localStorage.length > 0 ?
                <>
                    {items.map((item,key)=>
                    <CartArticle key={key} producto={item} items={items} setItems={setItems}></CartArticle>
                    )}
                    <button onClick={Comprar}>Comprar carrito</button>
                </>
                
                : <p className="cart-empty">{mensaje}</p>}

                

            </div>

            <Toast></Toast>
        </MainLayout>
    </>
};
export default Carrito;