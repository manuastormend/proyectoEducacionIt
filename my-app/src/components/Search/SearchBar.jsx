import Search from "./Search";

function SearchBar(){

    return <div className="search-bar col-lg-5 col-md-5 col-sm-0 col-xs-0">

                <form className="search-bar__form-container">
                    <Search/>
                </form>
                <div className="search-bar__carrito-container">
                    <i className="fas fa-shopping-cart fa-lg" ></i>
                </div>
            </div>
}

export default SearchBar;