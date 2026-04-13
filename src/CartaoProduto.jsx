import Perfil from "./perfil";

function CartaoProduto({ foto, nome, descricao, preco }) {
  return (
    <div className="cartao-produto">
      <Perfil foto={foto} nome={nome} />
      <h3>{nome}</h3>
      <p className="descricao">{descricao}</p>
      <p className="preco">{preco}</p>
    </div>
  );
}

export default CartaoProduto;

