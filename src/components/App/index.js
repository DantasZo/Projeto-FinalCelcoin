
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../static/navbar";
import Aventura from "../../pages/aventura/aventura";
import Home from "../../pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aventura" element={<Aventura />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
