import React from "react";
import "../components/Header.css"

const Header = () => {
    return (
        <div className="all">
            <div className="wht">
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}

export default Header;