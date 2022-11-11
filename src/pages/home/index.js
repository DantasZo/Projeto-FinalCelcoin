import { Link } from 'react-router-dom';
import './style.css'

function Home() {

  return (
    <div className="Home">
      <h1>Bem vindo! Oque você busca hoje?</h1>
      <div className='generosLit'>
      <Link to='/terror'>
        <p className='generosIcon' id='terror'>💀Terror
          <img src='https://m.media-amazon.com/images/I/41R9pm5hL-L._SY344_BO1,204,203,200_QL70_ML2_.jpg' height='400px' ></img>
        </p>
        </Link>
        <Link to='/romance'>
        <p className='generosIcon' id='romance'>💘Romance
          <img src='https://m.media-amazon.com/images/I/41ng1KZ77lL._SY346_.jpg' height='400px' ></img>
        </p>
        </Link>
        <Link to='/aventura'>
          <p className='generosIcon' id='aventura'>⚔️Aventura
            <img src='https://m.media-amazon.com/images/I/51SWYbVVLvL._SY344_BO1,204,203,200_QL70_ML2_.jpg' height='400px' ></img>
          </p></Link>
      </div>
    </div>


  )
}

export default Home;