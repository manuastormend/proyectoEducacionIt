import { useNavigate } from "react-router";

function CartContainer(){

    let nav = useNavigate();
    function onClick(){
        nav("/cart");
    }
    return <div className="search-bar__carrito-container">
                <span onClick={(e)=>onClick()}><i  className="fas fa-shopping-cart fa-lg" ></i></span>
            </div>
            
}

export default CartContainer;