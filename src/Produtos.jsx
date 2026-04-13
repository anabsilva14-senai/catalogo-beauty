import { useState } from "react";
import CartaoProduto from "./CartaoProduto.jsx";
import dadosProdutos from "./dadosProdutos.js";

const categorias = ["Todos", "Acessórios", "Cabelo", "Skincare", "Corpo", "Maquiagem", "Olhos"];

function ProdutosPage() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  const produtosFiltrados = categoriaSelecionada === "Todos"
    ? dadosProdutos
    : dadosProdutos.filter(p => p.categoria === categoriaSelecionada);

  return (
    <div className="produtos-page">
      <h2>Nossos Produtos</h2>
      <div className="filtros">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={categoriaSelecionada === cat ? "ativo" : ""}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="produtos-grid">
        {produtosFiltrados.map(prod => (
          <CartaoProduto
            key={prod.id}
            foto={prod.foto}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
          />
        ))}
      </div>
    </div>
  );
}

export default ProdutosPage;
