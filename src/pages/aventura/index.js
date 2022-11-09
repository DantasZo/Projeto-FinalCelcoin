import './style.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


export default function Aventura() {
    const [livrosAventura, setLivrosAventura] = useState(null)
    
 
    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/livros/`, { params: { genero: 'Aventura' } })
        promise.then(response => {
            setLivrosAventura(response.data);

        })
    }, [])


    function buildAventura() {
        if (!livrosAventura) return <h1> Os minions estão indo buscar seus livros...</h1>
        return livrosAventura.map(book => {
            const url = `/livro/${book.id}`;
            return (
                <div className='livro'>
                <h1 className='titulo' >{book.nome}</h1>
               <p className='conteudo' id='generoAventura'>{book.genero}</p>
               <img src={book.capa} className='conteudo' width='200px' height='260px' />
               <br></br>
               <Link to={url}><button className='botaoMais' >Quero saber mais!</button></Link>
           </div>
            )
        })
    }

    const aventuraComponent = buildAventura();
    return (
        <div className='Aventura'>

            {aventuraComponent}

        </div>

    )


}