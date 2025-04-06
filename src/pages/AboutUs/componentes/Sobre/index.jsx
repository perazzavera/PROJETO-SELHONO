import { useEffect } from "react";
import styles from "./Sobre.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Sobre = () => {
  useEffect(() => {
    // Inicializando o AOS
    Aos.init({
      duration: 1000, // Duração da animação
      once: false,
    });
  }, []);

  return (
    <section className={`d-flex flex-column ${styles.container}`}>
      <div
        data-aos="slide-left"
        className="d-flex align-items-center justify-content-between"
      >
        <div>
          <h2>What We Do</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <button>
            Our Concept <i class="bi bi-arrow-right-short fs-4 pt-1" />
          </button>
        </div>
        <div>
          <img src="/assets/what-we-do.png" alt="imagem 1" />
        </div>
      </div>
      <div data-aos="slide-right" className="d-flex align-items-center gap-5">
        <div>
          <img src="/assets/the-end-result.png" alt="imagem 1" />
        </div>
        <div>
          <h2>The End Result</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <button>
            Our Portfolio <i class="bi bi-arrow-right-short fs-4 pt-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
