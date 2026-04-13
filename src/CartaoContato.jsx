function CartaoContato({ titulo, valor, link }) {
  const conteudo = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">{valor}</a>
  ) : (
    <span>{valor}</span>
  );

  return (
    <div className="cartao-contato">
      <h4>{titulo}</h4>
      <div className="contato-valor">{conteudo}</div>
    </div>
  );
}

export default CartaoContato;
