import './style.css'
import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import CartContext from '../../../Context';

export default function SaberMais() {
    const [livroAventura, setLivroAventura] = useState(null);
    const { id } = useParams()
    const { cart, setCart } = useContext(CartContext)
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

    function addlivroAventura() {
        const Carrin = cart.find(book => book.id === livroAventura.id)
        if (Carrin) {
            livroAventura.quantidade += 1
        } else {
            livroAventura.quantidade = 1
            setCart([...cart, livroAventura])
        }
    }

    


    function fazDescricao() {
        if (!livroAventura) return <h1> Os minions estão indo buscar seus livros...</h1>
        return livroAventura.map(book => {
            return (

                <div className='Conteudo' key={book.id}>
                    <img className='Capa' src={book.capa}></img>
                    <div className=" Infos">
                        <h1 className='Titulo'>{book.nome}</h1>
                        <a className='Autor'>{book.autor}</a><br></br>
                        <a className='Sinopse'>{book.sinopse}</a><br></br>
                        <a className='Valor'>Preço: R${book.valor}</a>
                        <br></br>
                        <button className='BotaoCompra' onClick={addlivroAventura}>Eu quero levar !</button>
                        <br></br>
                        <button className='BotaoVolta' onClick={handleBack}>Vou pensar melhor!</button>
                    </div>
                </div>
            )
        })
    }
    console.log(cart, "tentei")
    const livroEsc = fazDescricao();
    return (
        <div className='Definido'>

            {livroEsc}

        </div>)
}