import { useContext, useState } from "react";
import SearchContext from "../../context/SearchContext";

function Search(){
    	
    
    const [campoBusqueda,setCampoBusqueda] = useState('')

    const ctx = useContext(SearchContext);

    function handleBusqueda(e){
        const valor = e.currentTarget.value;
        ctx(valor);
        setCampoBusqueda(valor)
    }

    return <input onChange={handleBusqueda} value={campoBusqueda} type="search" className="search-bar__form-search" id="busqueda" placeholder="Modelo, marca, categoría..." />
                
}

export default Search;