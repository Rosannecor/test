import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <img 
                src='https://image.freepik.com/vrije-vector/goed-eten-logo-sjabloon_79169-17.jpg'
                width='50px'
                height='50px' 
                alt=""
            />
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="Home">Home</Link>
                        </li>
                        <li>
                            <Link to="About">About</Link>
                        </li>
                        <li>
                            <Link to="Login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
