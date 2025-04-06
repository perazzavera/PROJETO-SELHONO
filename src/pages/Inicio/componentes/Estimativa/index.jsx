import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importando o CSS do AOS
import styles from "./Estimativa.module.css";
import Botao from "../../../../componenstes/Botao";

const Estimativa = () => {
  useEffect(() => {
    // Inicializando o AOS
    AOS.init({
      duration: 1000, // Duração da animação
      once: false,
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles.info} data-aos="fade-right">
          <h2>We create art for modern life</h2>
          <p>
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className={styles.contato}>
            <i className={`bi bi-telephone fs-2 ${styles.icone}`} />
            <span>
              <h6>012345678</h6>
              <p>Call Us Anytime</p>
            </span>
          </div>
          <Botao
            borderRadius="18px"
            boxShadow=" 1px 8px 20px rgba(255, 255, 255, 0.2)"
          >
            Get Free Estimate <i className="bi bi-arrow-right-short fs-3" />
          </Botao>
        </div>
      </div>
      <div className={styles.imagem} data-aos="fade-left" />
    </section>
  );
};

export default Estimativa;
