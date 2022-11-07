import './style.css'

import Logo from "../../assets/logo.png"

function Navbar(){
    return(

    <header className='Navbar'>
        <img className='logo' src={Logo} alt="loading" />
     <nav>
        <ul className='nav_links' >
            <li href="#"><a>Home</a></li>
            <li href="#"><a>Produtos</a></li>
            <li href="#"><a>Sobre</a></li>
        </ul>
     </nav>
     <a className='cta' href='#'> 
     <button className='carrinho'>Carrinho</button> 
     </a>
    </header>


    )
}
export default Navbar;