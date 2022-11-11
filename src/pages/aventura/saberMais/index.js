import './style.css'
import { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import CartContext from '../../../Context';

export default function SaberMais() {
    const [livroAventura, setLivroAventura] = useState(null);
    const { id } = useParams()
    const { cart, setCart } = useContext(CartContext)
    const [quantidade, setQuantidade] = useState(1);
    const navigate = useNavigate()

    function handleBack() {
        navigate("/")
    }

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/livro`)
        promise.then(response => {
            const livro = response.data.find(el => el.id == id)
            setLivroAventura(livro);
        })
    }, [])

    function addlivroAventura() {
        console.log("livro aventura", livroAventura);

        // já tem o livro no carrinho
        let indexBookOrder = -1;
        const bookOrder = cart.find(({ book }, index) => {
            indexBookOrder = index;
            return book.id === livroAventura.id
        });
        if (bookOrder && indexBookOrder >= 0) {
            const updatedCart = [...cart];
            updatedCart[indexBookOrder].quantidade += quantidade;
            return setCart([...cart]);
        }

        setCart([...cart, { book: livroAventura, quantidade }])
    }

    function fazDescricao() {
        if (!livroAventura) return <h1> Os minions estão indo buscar seus livros...</h1>
        const book = livroAventura;
        return (
            <div className='Conteudo' key={book.id}>
                <img className='Capa' src={book.capa}></img>
                <div className=" Infos">
                    <h1 className='Titulo'>{book.nome}</h1>
                    <a className='Autor'>{book.autor}</a><br></br>
                    <a className='Sinopse'>{book.sinopse}</a><br></br>
                    <a className='Valor'>Preço: R${book.valor}</a>
                    <br></br>
                    <button className='BotaoCompra' onClick={addlivroAventura} disabled={quantidade <= 0}>Eu quero levar !</button>
                    <label htmlFor="quantidade">Quantidade</label>
                    <input type="number" min={1} onChange={(e) => setQuantidade(parseInt(e.target.value))} value={quantidade}></input>
                    <br></br>
                    <button className='BotaoVolta' onClick={handleBack}>Vou pensar melhor!</button>
                </div>
            </div>
        )
    }
    console.log("cart", cart)
    const livroEsc = fazDescricao();
    return (
        <div className='Definido'>

            {livroEsc}

        </div>)
}