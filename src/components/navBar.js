import React from "react";
import SearchBox from "../components/SearchBox";


function Nav() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <div  className="search-form">
                    <SearchBox/>
                </div> 
            </nav>
            );

}

export default Nav