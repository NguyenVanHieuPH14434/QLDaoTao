import React from "react";
import "../Search/Search.scss"
// import 'font-awesome/css/font-awesome.min.css';
function Search() {
    return (
        <>
            <div className="box">
                <div className="container-1">
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <input type="search" id="search" placeholder="Search..." />
                </div>
            </div>

        </>
    )
}
export default Search