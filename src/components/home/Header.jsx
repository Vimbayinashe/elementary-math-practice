import React from 'react';
import Menu from './Menu';
// import { Link } from 'react-router-dom';


const Header = () => {

    return(
        <header className="App-header">
            <Menu />
            <h1>Maths App</h1>
            {/* <h1><Link to="/">Maths App</Link></h1> */}
        </header>
    )
}

export default Header;