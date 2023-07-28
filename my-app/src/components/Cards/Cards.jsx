import { useState } from "react";
import productos from "../../assets/json/productos.json"
import Card from "./Card"


function textoCard(producto){

    return producto.nombre+producto.descripcion+producto.alt;
}

function Cards({busqueda}){


    let result = [];

    if (busqueda!=''){
        result = productos.filter(producto =>

            textoCard(producto).toLowerCase().includes(busqueda.toLowerCase())
        )
    }else{
        result = productos;
    }



    const listCards = result.map(producto => <Card key={producto.id} producto={producto}/>)

    return <>
        <section className="section-cards">
            <header className="section-cards__header">
                <h1 className="section-cards__header-titulo">Tenemos lo que estás buscando.</h1>
            </header>
        
            <div className="cards-container">{listCards}</div>

        </section>
    </>

}

export default Cards;


