import CartaoContato from "./CartaoContato.jsx";
import dadosContato from "./dadosContato.js";

function ContatoPage() {
  return (
    <div className="contato-page">
      <h2>Fale Conosco</h2>
      <div className="contato-grid">
        <CartaoContato titulo="Email" valor={dadosContato.email} />
        <CartaoContato titulo="Telefone" valor={dadosContato.telefone} />
        <CartaoContato titulo="WhatsApp" valor="Clique aqui" link={dadosContato.whatsappLink} />
        <CartaoContato titulo="Endereço" valor={dadosContato.endereco} />
        <CartaoContato titulo="Matriz" valor={dadosContato.enderecoMatriz} />
      </div>

      <h3>Redes Sociais</h3>
      <div className="redes-grid">
        {dadosContato.redesSociais.map(rede => (
          <CartaoContato
            key={rede.nome}
            titulo={rede.nome}
            valor={rede.nome}
            link={rede.url}
          />
        ))}
      </div>

      <h3>Newsletter</h3>
      <div className="newsletter-card">
        <p>{dadosContato.newsletter.descricao}</p>
        <input type="email" placeholder="Seu melhor e-mail" />
        <button>Assinar</button>
      </div>
    </div>
  );
}

export default ContatoPage;
