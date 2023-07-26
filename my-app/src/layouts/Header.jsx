import { useState } from "react";
import Logotipo from "../components//Logotipo/Logotipo";
import Menu from "../components/Menu/Menu";
import MenuDesplegable from "../components/Menu/MenuDesplegable";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/Search/SearchBar";



function Header(){

    const [desplegar,setDesplegar] = useState(false);

    return    <>
    <header className="main-header">
              <Logotipo/>
              <Menu desplegar={desplegar} setDesplegar={setDesplegar}/>
              <NavBar/>
              <SearchBar/>
              
    </header>
    {desplegar ? <MenuDesplegable></MenuDesplegable> : null}
  </>
}


export default Header;