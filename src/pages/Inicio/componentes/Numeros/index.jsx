import { useRef, useEffect, useState } from "react";
import numeros from "../../../../mocks/numeros.json";
import styles from "./Numeros.module.css";
import { CountUp } from "countup.js";

const Numeros = () => {
  const refs = useRef([]);
  const [isVisible, setIsVisible] = useState(false); // Controle de visibilidade

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsVisible(true); // Se a seção estiver visível, habilita a contagem
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% da seção precisa estar visível
    });

    observer.observe(refs.current[0]); // Observa o primeiro item da lista (pode ser qualquer outro)
    return () => observer.disconnect(); // Desconecta o observador quando o componente for desmontado
  }, []);

  useEffect(() => {
    if (isVisible) {
      refs.current.forEach((el, id) => {
        const countUp = new CountUp(el, numeros[id].numero);
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      });
    }
  }, [isVisible]); // Executa a contagem quando a seção se tornar visível

  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        {numeros.map((numero, id) => (
          <div key={numero.id} className={`text-center ${styles.item}`}>
            <h2 ref={(el) => (refs.current[id] = el)} id="contador">
              {numero.numero}
            </h2>
            <p className="text-muted">{numero.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Numeros;
