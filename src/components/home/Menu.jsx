import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Menu.css";


const Menu = () => {

    const [touched, setTouched] = useState(false);

    return(
        <div className={touched ? "menu clicked" : "menu"}>
            {/* <div className ="hamburger" */}
            <div className ={touched ? "hamburger clicked" : "hamburger"}
                onClick={() => setTouched(!touched)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {
                touched ? 
                <ul className="dropdown-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to ="/game">Play</NavLink></li>
                    <li>Profile</li>
                    <li>Login</li>
                </ul>
                : ''
            }
        </div>
    )
}

export default Menu;