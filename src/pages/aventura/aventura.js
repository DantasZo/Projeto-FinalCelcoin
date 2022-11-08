import './style.css'
import Navbar from "../../components/static/navbar/";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Aventura() {
    const [livrosAventura, setLivrosAventura] = useState(null)

    useEffect(() => {
        const promise = axios.get("http://localhost:1234/livros", { params: { genero: 'Fantasia' } })
        promise.then(response => {
            setLivrosAventura(response.data);

        })
    }, [])


    function buildAventura() {
        if (!livrosAventura) return <h1> Os minions estão indo buscar seus livros...</h1>
        return livrosAventura.map(book => {
            const url = `/aventura/${book.id}`;
            return (
                <div className='info'>
                    <ul className='livroPag' >
                        <li><a className='nomeLivro'>Nome do livro: {book.nome}</a></li>
                        <li><a>{book.genero}</a></li>
                        <img src={book.capa} width='140' height='175' />
                    </ul>
                    
                    <button>Quero esse!</button>
                </div>
            )
        })
    }

    const aventuraComponent = buildAventura();
    return (
        <div className='Aventura'>
            <ul>
                {aventuraComponent}
            </ul>
        </div>

    )


}