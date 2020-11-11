import React from "react";
import SearchBox from "./SearchBox";
import '../components/styles/NavBar.css';


function Nav() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div  className="search-form">
                    <SearchBox/>
                </div> 
            </nav>
            );

}

export default Nav