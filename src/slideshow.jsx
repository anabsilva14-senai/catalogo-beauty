import { useState, useEffect } from "react";
import banner1 from "./imagens/banner1.jpg";
import banner2 from "./imagens/banner2.jpg";

function Slideshow() {
  const imagens = [banner1, banner2];
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual(prev => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [imagens.length]);

  const proximoSlide = () => setIndiceAtual(prev => (prev + 1) % imagens.length);
  const voltarSlide = () => setIndiceAtual(prev => (prev - 1 + imagens.length) % imagens.length);

  return (
    <div className="slideshow">
      <img src={imagens[indiceAtual]} alt={`Banner ${indiceAtual + 1}`} className="banner" />
      <div className="controles">
        <button onClick={voltarSlide}>Anterior</button>
        <button onClick={proximoSlide}>Próximo</button>
      </div>
    </div>
  );
}

export default Slideshow;
