import { useState } from "react";
import Cards from "../components/Cards/Cards";
import MainLayout from "../layouts/MainLayout";
import SearchContext from "../context/SearchContext";

function Home() {

    const [busqueda,setBusqueda] = useState('');

    const handleBusqueda = (valor) => {
        setBusqueda(valor)
    }

    return    <SearchContext.Provider value={handleBusqueda}>
        <MainLayout children={<Cards busqueda={busqueda}/>}/>
    </SearchContext.Provider>
    
    
    
};


export default Home;