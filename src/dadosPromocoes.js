import promo1 from "./imagens/prod11.jpg";
import promo2 from "./imagens/prod6.jpg";
import promo3 from "./imagens/prod8.jpg";
import promo4 from "./imagens/prod14.jpg";
import promo5 from "./imagens/prod2.jpg";

const dadosPromocoes = [
  { 
id: 1, 
nome: "Frete Grátis para todo o Brasil", 
tipo: "frete", 
foto: promo1
},
  {
 id: 2, 
nome: "10% off na primeira compra", 
tipo: "desconto", 
foto: promo2 
},
  { 
id: 3, 
nome: "Compre 2, ganhe 1 brinde (ampola de tratamento)", 
tipo: "brinde", 
foto: promo3
 },
  {
 id: 4, 
nome: "Frete grátis acima de R$ 100", 
tipo: "frete", 
foto: promo4 
},
  { 
id: 5,
 nome: "Compre máscara de argila + máscara noturna e ganhe 10% off", 
tipo: "desconto", 
foto: promo5 
}
];

export default dadosPromocoes;
