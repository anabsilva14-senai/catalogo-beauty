import Perfil from "./perfil";

function CartaoPromocao({ foto, nome, tipo }) {
  return (
    <div className="cartao-promocao">
      <Perfil foto={foto} nome={nome} />
      <h4>{nome}</h4>
      <span className="tipo-promocao">{tipo}</span>
    </div>
  );
}

export default CartaoPromocao;
