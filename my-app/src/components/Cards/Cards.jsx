import { useEffect, useState } from "react";
import Card from "./Card"
import Preloader from "../Preloader/Preloader";


function textoCard(producto){

    return producto.nombre+producto.descripcion+producto.alt;
}

function Cards({busqueda}){

    const [productos,setProductos] = useState([])

    useEffect(()=>{
        if (productos.length==0){
            fetch('https://64c35bf9eb7fd5d6ebd0c5aa.mockapi.io/products')
                .then(res => res.json())
                .then(data => setProductos(data))
        }
    })

    let result = [];

    if (busqueda!=''){
        result = productos.filter(producto =>

            textoCard(producto).toLowerCase().includes(busqueda.toLowerCase())
        )
    }else{
        result = productos;
    }


    let titulo = "Tenemos lo que estás buscando."
    const listCards = result.map(producto => <Card key={producto.id} producto={producto}/>)

    return <>

        {result.length > 0 ? <section className="section-cards">
            <header className="section-cards__header">
                <h1 className="section-cards__header-titulo">{titulo.toUpperCase()}</h1>
                <div className="section-cards__header-img-container">
                    <img src="./img/homepic.png"></img>
                </div>
            </header>
        
            <div className="cards-container">{listCards}</div>

        </section>: <Preloader></Preloader>}
        
    </>

}

export default Cards;


