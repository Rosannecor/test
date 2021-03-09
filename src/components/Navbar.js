import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    

    //function javascript komt hier

    return (
        <div className="navbar">
            <img className="navbar__image"
                src='Goed-eten.gif'
                alt="logo"
            />
            <img className="navbar__image_salade"
                src='Salade.png'
                alt="salade"
            />
            <div  className="navbar__container">
                <nav>
                    <ul className="navbar__ul">
                        <li>
                            <Link className="navbar__Link" to="Home">Home</Link>
                        </li>
                        <li>
                            <Link className="navbar__Link" to="About">About</Link>
                        </li>
                        <li>
                            <Link className="navbar__Link" to="Login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
