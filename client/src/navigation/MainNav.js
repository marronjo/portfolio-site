import React from 'react';
import { Link } from 'react-router-dom';

import './MainNav.css';

function MainNav(){
    return(
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-link">
                        Projects
                    </Link>
                </li>
            </ul>
            <p>Joe's Portfolio Website</p>
        </nav>
    );
}

export default MainNav;

/*

*/ 