import React from 'react';
import "./Menu.css";


const Menu = () => {

    return(
        <div className="menu">
            <div className ="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="dropdown-menu">
                <li>Home</li>
                <li>Play</li>
                <li>Profile</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Menu;