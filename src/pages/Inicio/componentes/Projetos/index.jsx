import styles from "./Projetos.module.css";
import projetos from "../../../../mocks/projetos.json";
import { useEffect } from "react";
import Aos from "aos";

const Projetos = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duração da animação
      once: false,
    });
  }, []);
  return (
    <section className={styles.container}>
      <h2>Follow Our Projects</h2>
      <h4>
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </h4>
      <div className="d-flex flex-wrap justify-content-between gap-4">
        {projetos.map((projeto) => (
          <div key={projeto.id}>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className={styles.imagem}
              style={{ backgroundImage: `url(${projeto.imagem})` }}
            ></div>
            <div className="d-flex align-items-center justify-content-between pt-3">
              <span>
                <h5 className="m-0">Modern bedroom</h5>
                <p className="m-0">Decor / Artchitecture</p>
              </span>
              <button>
                <i className="bi bi-chevron-right fs-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
