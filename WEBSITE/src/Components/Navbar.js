import '../css/navbar.css'
import Menu from '../images/menu.png'
import Menu_anim from '../images/menu-anim.gif'
import Menu_anim2 from '../images/menu-anim2.gif'
import Logo from '../images/Vortex.png'
import Cross from '../images/cross.png'
import Audio from '../images/nav-hover.mp3'
import { Link } from "react-router-dom";

const navbar = () => {
    const close = () =>{
        const img = document.getElementById('menu-img')
        const nav = document.getElementById("nav")
        if (img.src !== Cross){
            img.src = Menu_anim
            setTimeout(() =>{
                img.src = Cross
                img.style.height = '30px';
            }, 600)
            nav.style.left = 0;
        }
        else{
            img.style.height = '40px';
            img.src = Menu_anim2
            setTimeout(() =>{
                img.src = Menu
                img.style.height = '40px';
            }, 600)
            nav.style.left = '-1000px';
        }
    }
    const hover = () =>{
        const aud = document.getElementById("hover")
        aud.volume = 0.1
        aud.play()
    }
    return ( 
        <div className="nav-container">
            <audio volume='0.5' id='hover'>
                <source src={Audio} type='audio/mp3'/>
            </audio>
        <button onClick={close} className='menu-button'><img id="menu-img" src={Menu} alt="menu" /></button>
            <nav id="nav">
            <img className='logo' src={Logo} alt="logo" />
                <ul className='nav-ul'>
                    <li onMouseOver={hover}>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li onMouseOver={hover}>
                        <Link className='link' to="/products">Products</Link>
                    </li>
                    <li onMouseOver={hover}>
                        <Link className='link' to="/account">User</Link>
                    </li>
                    <li onMouseOver={hover}>
                        <Link className='link' to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default navbar;