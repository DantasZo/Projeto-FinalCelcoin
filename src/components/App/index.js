
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../static/navbar";
import Aventura from "../../pages/aventura/";
import Home from "../../pages/home";
import SaberMais from "../../pages/aventura/saberMais";
import Carrinho from "../../pages/carrinho";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aventura" element={<Aventura />} />
        <Route path="/livro/:id" element={<SaberMais />} />
        <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
