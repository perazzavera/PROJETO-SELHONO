import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importando o CSS do AOS
import styles from "./ComoTrabalhamos.module.css";
import etapas from "../../../../mocks/hww.json";

const ComoTrabalhamos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className={styles.container}>
      <h2>How We Work</h2>
      <h4>
        It is a long established fact will be distracted.Lorem Ipsum is simply
        dummy text of the printing and typesetting industry.
      </h4>
      <div className="d-flex flex-column">
        {etapas.map((etapa, id) => (
          <div
            key={etapa.id}
            className="d-flex justify-content-between mb-5"
            data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {id % 2 === 0 ? (
              <>
                <div>
                  <img src={etapa.imagem} alt={etapa.titulo} />
                </div>
                <div>
                  <div className={styles.conteudo}>
                    <h3
                      className={
                        id % 2 === 0
                          ? styles.alinhaDireita
                          : styles.alinhaEsquerda
                      }
                    >
                      {etapa.numero}
                    </h3>
                    <span>
                      <h5>{etapa.titulo}</h5>
                      <p>{etapa.texto}</p>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <div className={styles.conteudo}>
                    <h3
                      className={
                        id % 2 === 0
                          ? styles.alinhaDireita
                          : styles.alinhaEsquerda
                      }
                    >
                      {etapa.numero}
                    </h3>
                    <span>
                      <h5>{etapa.titulo}</h5>
                      <p>{etapa.texto}</p>
                    </span>
                  </div>
                </div>
                <div>
                  <img src={etapa.imagem} alt={etapa.titulo} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoTrabalhamos;
