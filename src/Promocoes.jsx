import CartaoPromocao from "./CartaoPromocao";
import dadosPromocoes from "./dadosPromocoes";

function PromocoesPage() {
  return (
    <div className="promocoes-page">
      <h2>Promoções Especiais</h2>
      <div className="promocoes-grid">
        {dadosPromocoes.map(promo => (
          <CartaoPromocao
            key={promo.id}
            foto={promo.foto}
            nome={promo.nome}
            tipo={promo.tipo}
          />
        ))}
      </div>
    </div>
  );
}

export default PromocoesPage;
