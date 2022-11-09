import './style.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';


export default function SaberMais() {
    const [livroAventura, setLivroAventura] = useState(null);
    const { id } = useParams()
    const navigate = useNavigate()

    function handleBack() {
        navigate("/aventura")
    }

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/livro`)
        promise.then(response => {
            const livro = response.data.filter(el => el.id == id)
            setLivroAventura(livro);

        })
    }, [])
    function fazDescricao() {
        if (!livroAventura) return <h1> Os minions estão indo buscar seus livros...</h1>
        return livroAventura.map(book => {
            return (

                <div className='Conteudo'> 
               <img className='Capa' src={book.capa}></img>
               <div className=" Infos">
                    <h1 className='Titulo'>{book.nome}</h1>
                    <a className='Autor'>{book.autor}</a><br></br>
                    <a className='Sinopse'>{book.sinopse}</a><br></br>
                    <a className='Valor'>Preço: R${book.valor}</a>
                    <br></br>
                    <button className='BotaoCompra'>Eu quero!</button>
                    <br></br>
                    <button className='BotaoVolta' onClick={handleBack}>Vou pensar melhor!</button>
                </div>
                </div>
            )
        })
    }



    const livroEsc = fazDescricao();
    return (
        <div className='Definido'>

            {livroEsc}

        </div>)
}