import './style.css'

import Logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';

function Navbar(){
    return(

    <header className='Navbar'>
        <img className='logo' src={Logo} alt="loading" />
     <nav>
        <ul className='nav_links' >
            <li><Link to="/"><a>Home</a></Link></li>
            <li><a>Sobre</a></li>
        </ul>
     </nav>
     <a className='cta' href='#'> 
     <button className='carrinho'>Carrinho</button> 
     </a>
    </header>


    )
}
export default Navbar;