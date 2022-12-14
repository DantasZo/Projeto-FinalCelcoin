import './style.css'

import Logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <div className="Navbar">
      <nav>
        <ul>
        <img className='logo' width='80px' height='80px' align='left' src={Logo} alt="loading" />
        
          <li><Link to='/'>Home</Link></li>
          <li><a href="#">Sobre</a></li>
          <Link to='/carrinho'><button className='Navbotao'>Carrinho 🛒</button></Link>
        </ul>
      </nav>
    </div>
  

    )
}
export default Navbar;