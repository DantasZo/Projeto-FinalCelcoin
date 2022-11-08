import { Link } from 'react-router-dom';
import './style.css'
import { useNavigate } from 'react-router-dom';

function Home(){
 
    function GoTo() {
        const navigate = useNavigate();
        navigate("/aventura");
      }
 
    return(

   <div className='topSide'> 
   <h1 className='titulo'>Bem vindo a Book2You!</h1>
   <h2>Escolha a sua sessão de livros:</h2>
   <li><Link to="aventura">Fantasia!</Link></li>
   <li> Terror!</li>
   <li> Romance!</li>
   </div>
   

  )
}

export default Home;