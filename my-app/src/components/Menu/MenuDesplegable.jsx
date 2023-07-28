import React from 'react';
import { Link } from 'react-router-dom';

function MenuDesplegable(){

    return  <div className="menu__desplegable col-lg-0 col-md-0 col-sm-12 col-xs-12">
            <ul>
            <li><Link to={"/"} className="menu__desplegable-link"> INICIO </Link></li>
            <li><Link to={"/alta"} className="menu__desplegable-link"> ALTA </Link></li>
            <li><Link to={"/contacto"} className="menu__desplegable-link"> CONTACTO </Link></li>
            <li><Link to={"/nosotros"} className="menu__desplegable-link"> NOSOTROS </Link></li>
            <li><Link to={"/cart"} className="menu__desplegable-link"> CARRITO ({localStorage.length}) </Link></li>
            </ul>
        </div>
}

export default MenuDesplegable;