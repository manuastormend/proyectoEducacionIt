import React from 'react';
import { Link } from 'react-router-dom';


const arrayOptions = [
    {id: 1,nombre:'inicio',link:'Home.jsx'},
    {id: 2,nombre:'alta',link:'Alta.jsx'},
    {id: 3,nombre:'contacto',link:'Contacto.jsx'},
    {id: 4,nombre:'nosotros',link:'Nosotros.jsx'}
]

function NavBar(){

    
    const Options = arrayOptions.map(option=>{

        let link = '';

        if (option.nombre=='inicio')
            link = '/';
        else
            link = `/${option.nombre}`;

        

        return <li key={option.id} className="nav-bar__nav-item">
            <Link to={link} className="nav-bar__nav-link"> {option.nombre.toUpperCase()} </Link>
        </li>


    })

    return  <nav className="nav-bar col-lg-5 col-md-5 col-sm-0 col-xs-0">
                <ul className="nav-bar__nav-list">{Options}</ul>
            </nav>
}

export default NavBar;