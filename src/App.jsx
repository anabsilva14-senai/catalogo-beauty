import { useState } from "react";
import './App.css';

import Topo from "./Topo.jsx";
import Rodape from "./Rodape.jsx";
import Slideshow from "./slideshow.jsx";
import Home from "./Home.jsx";
import ProdutosPage from "./Produtos.jsx";
import PromocoesPage from "./Promocoes.jsx";
import ContatoPage from "./Contato.jsx";

function App() {
  const [secao, setSecao] = useState("home");

  return (
    <>
      <Topo />

      {secao === "home" && <Slideshow />}

      <div className={secao === "home" ? "menu-inicial" : "menu-top"}>
        <button className={secao === "home" ? "ativo" : ""} onClick={() => setSecao("home")}>Home</button>
        <button className={secao === "produtos" ? "ativo" : ""} onClick={() => setSecao("produtos")}>Produtos</button>
        <button className={secao === "promocoes" ? "ativo" : ""} onClick={() => setSecao("promocoes")}>Promoções</button>
        <button className={secao === "contato" ? "ativo" : ""} onClick={() => setSecao("contato")}>Contato</button>
      </div>

      <div className="container">
        {secao === "home" && <Home />}
        {secao === "produtos" && <ProdutosPage />}
        {secao === "promocoes" && <PromocoesPage />}
        {secao === "contato" && <ContatoPage />}
      </div>

      <Rodape />
    </>
  );
}

export default App;
