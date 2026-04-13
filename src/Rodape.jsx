import dadosContato from "./dadosContato.js";

function Rodape() {
  return (
    <footer className="rodape">
      <div className="contato-info">
        <p>{dadosContato.email}</p>
        <p>{dadosContato.telefone}</p>
        <p>{dadosContato.endereco}</p>
        <p>{dadosContato.enderecoMatriz}</p>
      </div>
      <div className="redes-sociais">
        {dadosContato.redesSociais.map(rede => (
          <a key={rede.nome} href={rede.url} target="_blank" rel="noopener noreferrer">
            {rede.nome}
          </a>
        ))}
      </div>
      <div className="newsletter">
        <p>{dadosContato.newsletter.descricao}</p>
        <input type="email" placeholder="Seu melhor e-mail" />
        <button>Assinar</button>
      </div>
    </footer>
  );
}

export default Rodape;
