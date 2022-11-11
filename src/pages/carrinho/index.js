import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../Context"
import './style.css'

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)
    const [ diminui, setDiminui] = useState(1)
    


    return (
        <div className="CarrinhoItems">
            <h1 className="imagemLivro" >Meu Carrinho</h1>
            {cart.map(({ book, quantidade }) => {
                return (
                    <div className="CarrinhoItems" key={book.id}>
                        <img className="imagemLivro" src={book.capa} alt="imagem do produto" />
                        <h2 className="imagemLivro">{book.nome}</h2>
                        <p className="imagemLivro" >Total: R$ {parseInt(book.valor) * (quantidade)} </p>
                        <div>
                            <p className="QuantidadeDeItem" >{quantidade}</p>
                        </div>
                    </div>
                )
            })}
            <button className="imagemLivro" > finalizar compra </button>
            
           <Link to="/"> <button className="imagemLivro" > Esqueci algumas coisas!</button></Link>
        </div>
    )



}