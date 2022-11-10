import { useContext, useState } from "react"
import CartContext from "../../Context"


export default function Cart() {
    const { cart, setCart } = useContext(CartContext)
    const [quant, setQuant] = useState(null)



    function addProduct(id) {
        cart.forEach((book) => {
            if (book.id === id) {
                book.quantidade += 1
                setQuant(book.quantidade)
            }
        })

    }
    function subProduct(id) {
        cart.forEach((book) => {
            if (book.id === id) {
                book.quantidade -= 1
                setQuant(book.quantidade)
            }
        })

    }
    console.log(cart)


    return (
        <div>
            <h1>Meu Carrinho</h1>
            {cart.map((book) => {
                return (
                    <div key={book.id}>
                        <img src={book.img} alt="imagem do produto" />
                        <h2>{book.nome}</h2>
                        <p>Total: R$ {parseInt(book.valor * book.quantidade).toFixed(2).replace(".", ",")} </p>
                        <div>
                            <button onClick={() => addProduct(book.id)}> + </button>
                            <p>{book.quantidade}</p>
                            <button onClick={() => subProduct(book.id)} > - </button>
                        </div>
                    </div>


                )
            })}
            <button> finalizar compra </button>
        </div>
    )



}