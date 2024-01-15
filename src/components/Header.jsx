import React from "react";
import "../components/Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="fon-serch">
                <input type="text" className="search-input" placeholder="Search..." />
                <div>
                    <button className="search-but">
                        <img src="magnifying-glass-solid.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;