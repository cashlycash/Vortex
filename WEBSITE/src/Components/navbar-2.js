import Logo from '../images/Vortex2.png'
import '../css/nav2.css'
import Audio from '../images/nav-hover.mp3'
import { useState } from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
    const hover = () =>{
        const aud = document.getElementById("hover")
        aud.volume = 0.1
        aud.play()
    }
    return ( 
        <div className="nav2-container">
            <audio volume='0.5' id='hover'>
                <source src={Audio} type='audio/mp3'/>
            </audio>
            <nav id="nav">
                <ul className='nav-ul2'>
                    <li><img className='logo2' src={Logo} alt="logo" /></li>
                    <span className='nav-opt'>
                    <li onMouseOver={hover}>
                        <Link className='link link2' to="/">Home</Link>
                    </li>
                    <li onMouseOver={hover}>
                        <Link className='link link2' to="/products">Products</Link>
                    </li>
                    <li onMouseOver={hover}>
                        <Link className='link link2' to="/account">User</Link>
                    </li>
                    <li onMouseOver={hover}>
                        <Link className='link link2' to="/cart">Cart</Link>
                    </li>
                    </span>
                </ul>
                <span>
                    </span>
            </nav>
            <div className="background"></div>
        </div>
     );
}
 
export default Nav;