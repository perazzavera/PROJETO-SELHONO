import { useEffect } from "react";
import Botao from "../../../../componenstes/Botao";
import styles from "./BannerInicio.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Importando o estilo do AOS

const BannerInicio = () => {
  useEffect(() => {
    // Inicializando o AOS
    AOS.init({
      duration: 1000, // duração da animação
      once: false,
    });
  }, []);

  return (
    <section className="my-5">
      <div className={`${styles.container} px-4 pt-5`}>
        <div
          className={`text-light p-5 mx-3 ${styles.vidro}`}
          data-aos="fade-up"
        >
          <h2>
            Let's make your home <br /> beautiful together
          </h2>
          <p>
            There are many variations of the passages <br /> of lorem Ipsum from
            available, majority.
          </p>
          <Botao borderRadius="18px">
            Get Started <i className="bi bi-arrow-right-short fs-4" />
          </Botao>
        </div>
      </div>
    </section>
  );
};

export default BannerInicio;
