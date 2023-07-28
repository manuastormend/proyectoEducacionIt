import CartContainer from "../Cart/CartContainer";
import Search from "./Search";

function SearchBar(){

    return <div className="search-bar col-lg-5 col-md-5 col-sm-0 col-xs-0">

                <form className="search-bar__form-container">
                    <Search/>
                </form>
                <CartContainer/>
            </div>
}

export default SearchBar;