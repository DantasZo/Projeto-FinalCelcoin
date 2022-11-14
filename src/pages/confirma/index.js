import { Link } from 'react-router-dom';
import './style.css'
import CartContext from "../../Context"
import { useContext, useState } from "react"
import axios from "axios";



function Confirma(rua, bairro, uf, cidade) {

    const { cart, setCart } = useContext(CartContext)
    const [setFechar] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState("");
    const [input, setInput] = useState("");
    const [endereco, setEndereco] = useState({});

    function getCep(e) {
        setInput(e.target.value);
        console.log('entrei no getCep: ', e.target.value.length)

        if (e.target.value.length < 8) {
            setEndereco({
                rua: "",
                bairro: "",
                uf: "",
                cidade: ""
            });
            return
        } const Api = `https://viacep.com.br/ws/${e.target.value}/json/`;
        axios.get(Api).then((res) => {
            setEndereco({
                rua: res.data.logradouro,
                bairro: res.data.bairro,
                uf: res.data.uf,
                cidade: res.data.localidade
            });

            setFechar(true)
        })
    }

    function fakeConfirm() {
        console.log('pedido confirmado')
    }

    return (

        <div className="Home">
            <h1 className="imagemLivro" >Suas compras!</h1>
            {cart.map(({ book, quantidade }) => {
                return (

                    <div className="CarrinhoItems" key={book.id}>
                        <img className="imagemLivro" src={book.capa} alt="imagem do produto" />
                        <h2 className="imagemLivro">{book.nome}</h2>
                        <p className="imagemLivro"  >Total: R$ {parseInt(book.valor) * (quantidade)} </p>
                        <div>
                            <p className="QuantidadeDeItem" >Quantidade de livros: {quantidade}</p>

                        </div>
                    </div>

                )
            })}

            <h2>Confime sua entrega!</h2>
            <form>
                <label for="name">
                    Nome:
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" name="name" required />
                </label>
                <label for="email">
                    Email:
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" name="email" required />
                </label>
                Data de nascimento:
                <input type="date" name="date" value={data} onChange={(e) => setData(e.target.value)} required />
                <label for="cep" >
                    CEP:
                    <input type="number" name="cep" placeholder="Digite seu CEP" onChange={(e) => {
                        getCep(e)
                    }} />
                </label>
                <br></br>
                <label for="rua">
                    Rua:
                    {rua !== "" && <input type="text" name="rua" placeholder="Rua" value={endereco.rua} />}
                </label>
                <label for="bairro">
                    Bairro:
                    {bairro !== "" && <input type="tex" name="bairro" placeholder="Bairro" value={endereco.bairro} />}
                </label>
                <label for="cidade">
                    Cidade:
                    {cidade !== "" && <input type="text" name="cidade" placeholder="Cidade" value={endereco.cidade} />}
                </label>
                <label for="uf">
                    Estado:
                    {uf !== "" && <input type="text" name="uf" placeholder="Estado" value={endereco.uf} />}
                </label>


                <button onClick={fakeConfirm}>Enviar</button>
            </form>


        </div>


    )
}

export default Confirma;